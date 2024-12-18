// Data structure to hold complaints
let complaints = [];
let complaintCategories = ["Electricity", "Water", "Medical", "Roads"];

// Show Citizen Portal
function showCitizenPortal() {
    hideAllPortals();
    document.getElementById("citizenPortal").style.display = "block";
}

// Show Admin Portal
function showAdminPortal() {
    hideAllPortals();
    document.getElementById("adminPortal").style.display = "block";
}

// Back to Main Menu
function backToMainMenu() {
    hideAllPortals();
    document.getElementById("mainMenu").style.display = "block";
}

// Back to Citizen Portal
function backToCitizenPortal() {
    hideAllPortals();
    document.getElementById("citizenPortal").style.display = "block";
}

// Hide all portals
function hideAllPortals() {
    const portals = document.querySelectorAll('.portal');
    portals.forEach(portal => portal.style.display = "none");
}

// Register a complaint
function registerComplaint() {
    hideAllPortals();
    document.getElementById("complaintForm").style.display = "block";
}

// Submit Complaint
function submitComplaint() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const cnic = document.getElementById("cnic").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const gender = document.getElementById("gender").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    // Creating the complaint object
    const complaint = {
        firstName,
        lastName,
        cnic,
        phone,
        address,
        gender,
        category,
        description,
        status: "Pending",
        resolvedBy: "None"
    };

    // Add complaint to the list
    complaints.push(complaint);

    alert("Complaint Registered Successfully!");
    backToCitizenPortal();
}

// View complaints registered by the citizen
function viewComplaints() {
    if (complaints.length === 0) {
        alert("No complaints registered.");
    } else {
        let complaintDetails = "";
        complaints.forEach((complaint, index) => {
            complaintDetails += `Complaint #${index + 1}: \n Name: ${complaint.firstName} ${complaint.lastName} \n Category: ${complaint.category} \n Status: ${complaint.status} \n\n`;
        });
        alert(complaintDetails);
    }
}

// View Complaint Categories
function viewCategories() {
    let categories = "Categories:\n";
    complaintCategories.forEach((category) => {
        categories += `- ${category}\n`;
    });
    alert(categories);
}

// Admin: View All Complaints
function viewAllComplaints() {
    if (complaints.length === 0) {
        alert("No complaints yet.");
    } else {
        let allComplaints = "";
        complaints.forEach((complaint, index) => {
            allComplaints += `Complaint #${index + 1}: \n Name: ${complaint.firstName} ${complaint.lastName} \n Status: ${complaint.status} \n\n`;
        });
        alert(allComplaints);
    }
}

// Admin: Solve Complaint
function solveComplaint() {
    const complaintNumber = prompt("Enter Complaint Number to Solve:");

    if (complaintNumber && complaints[complaintNumber - 1]) {
        const department = prompt("Enter the department resolving this complaint:");

        complaints[complaintNumber - 1].status = "Solved";
        complaints[complaintNumber - 1].resolvedBy = department;

        alert(`Complaint #${complaintNumber} has been solved by ${department}`);
    } else {
        alert("Invalid complaint number.");
    }
}
