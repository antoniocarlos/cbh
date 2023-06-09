# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add custom Agent ID field to Facilities table
Description: Add a new field to the Facilities table in the database for storing custom Agent IDs.

Acceptance Criteria:

Facilities table has a new column for custom Agent IDs
Existing data is not affected
New Facilities can store custom Agent IDs for each Agent they work with
Time/Effort Estimate: 2 hours

Implementation Details:

Update the database schema to include a new column in the Facilities table for custom Agent IDs
Run a migration to update the existing database structure
Update any related models to include the new field

### Ticket 2: Update the getShiftsByFacility function to retrieve custom Agent IDs

Description: Modify the getShiftsByFacility function to return the custom Agent ID for each Agent, if available, along with the existing metadata.

Acceptance Criteria:

The getShiftsByFacility function returns custom Agent IDs for each Agent
If no custom Agent ID is available, the internal database ID is returned
Time/Effort Estimate: 3 hours

Implementation Details:

Modify the getShiftsByFacility function to retrieve the custom Agent IDs from the Facilities table
Update the returned data structure to include the custom Agent ID or the internal database ID, as applicable

### Ticket 3: Update the generateReport function to use custom Agent IDs

Description: Modify the generateReport function to use the custom Agent IDs instead of the internal database IDs in the generated report.

Acceptance Criteria:

The generated report displays custom Agent IDs when available
If no custom Agent ID is available, the internal database ID is used
Time/Effort Estimate: 4 hours

Implementation Details:

Update the generateReport function to accept the custom Agent ID or the internal database ID as a parameter
Modify the report generation logic to use the custom Agent ID when available, otherwise use the internal database ID
Update any related unit tests to verify that the custom Agent IDs are being used correctly

### Ticket 4: Add user interface for Facilities to manage custom Agent IDs

Description: Create or update the user interface for Facilities to add, edit, or delete custom Agent IDs for the Agents they work with.

Acceptance Criteria:

Facilities can add custom Agent IDs for new Agents
Facilities can edit or delete custom Agent IDs for existing Agents
Changes to custom Agent IDs are saved in the database
Time/Effort Estimate: 6 hours

Implementation Details:

Design and implement a user interface for managing custom Agent IDs
Add appropriate validation and error handling
Connect the interface with the backend to save custom Agent IDs to the Facilities table in the database

### Ticket 5: Update documentation and provide training materials

Description: Update the documentation to include the new custom Agent ID feature and create training materials for the client Facilities to learn how to use it.

Acceptance Criteria:

Updated documentation reflects the new custom Agent ID feature
Training materials are created to guide client Facilities in using the custom Agent ID feature
Time/Effort Estimate: 4 hours

Implementation Details:

Update the user manual and API documentation to include the new custom Agent ID feature
Create training materials such as video tutorials, guides, or FAQs to help client Facilities learn how to use the custom Agent ID feature