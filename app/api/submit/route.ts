import { NextRequest, NextResponse } from "next/server"
import { Client } from "@notionhq/client"

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required environment variables
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      console.error("Missing Notion environment variables")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Validate form data
    const requiredFields = [
      'name', 'email', 'enrollmentId', 'year', 'whatsappNumber',
      'preFestDepartments', 'festDayDepartment', 'motivation', 'workSample'
    ]
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Create the page in Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        // Name field (Title)
        "Name": {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        // University Email field (Email)
        "University Email": {
          email: data.email,
        },
        // Enrollment ID field (Number)
        "Enrollment ID": {
          number: parseInt(data.enrollmentId, 10),
        },
        // Year field (Multi-select)
        "Year": {
          multi_select: [
            {
              name: data.year,
            },
          ],
        },
        // Whatsapp Number field (Phone)
        "Whatsapp Number": {
          phone_number: data.whatsappNumber,
        },
        // Pre Fest Department Choice field (Multi-select)
        "Pre Fest Department Choice": {
          multi_select: data.preFestDepartments.map((dept: string) => ({
            name: dept,
          })),
        },
        // Fest Day Department Choice field (Multi-select)
        "Fest Day Department Choice": {
          multi_select: [
            {
              name: data.festDayDepartment,
            },
          ],
        },
        // Why do you want to work in Damru Fest field (Rich Text)
        "Why do you want to work in Damru Fest": {
          rich_text: [
            {
              text: {
                content: data.motivation,
              },
            },
          ],
        },
        // Show us your work field (Files)
        "Show us your work": {
           rich_text: [
            {
              text: {
                content: data.workSample,
              },
            },
          ],
        },
        // Status field (Status) - Default to appropriate status
        "Status": {
          status: {
            name: "Form Filled",
          },
        },
      },
    })

    console.log("Successfully created Notion page:", response.id)
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Registration submitted successfully!",
        pageId: response.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error submitting to Notion:", error)
    
    // Return appropriate error message
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to submit registration", details: error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: "Failed to submit registration" },
      { status: 500 }
    )
  }
}
