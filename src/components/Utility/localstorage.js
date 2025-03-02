const getStoredApplication = () => {
    try {
        const jobApplications = localStorage.getItem('job-applications');
        if (jobApplications) {
            return JSON.parse(jobApplications);
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error parsing job applications from localStorage:", error);
        return [];
    }
};

const saveJobApplications = (id) => {
    const storedApplications = getStoredApplication();

    // Convert id to string for consistent comparison
    const idString = id.toString();

    // Check if the id already exists in the stored applications
    const exists = storedApplications.find(jobId => jobId.toString() === idString);

    if (!exists) {
        storedApplications.push(idString); // Ensure stored IDs are strings
        try {
            localStorage.setItem('job-applications', JSON.stringify(storedApplications));
        } catch (error) {
            console.error("Error saving job applications to localStorage:", error);
        }
    }
};

export { saveJobApplications, getStoredApplication };