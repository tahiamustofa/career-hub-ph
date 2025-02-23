const getStoredApplication=()=>{
const jobApplications = localStorage.getItem('job-applications');
if (jobApplications) {
    return JSON.parse(jobApplications)
} else {
    return []
}
}
const saveJobApplications =(id)=>{
const storedApplication = getStoredApplication();
const exist = storedApplication.find(jodId =>jodId === id);
if (!exist) {
    storedApplication.push(id);
    localStorage.setItem ('job-applications',JSON.stringify(storedApplication));
} 

}
export {saveJobApplications,getStoredApplication};