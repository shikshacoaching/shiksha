// CONFIGURATION
const API_URL = 'https://script.google.com/a/~/macros/s/AKfycbyecQNNH8ZGTQjcwF-34_AGc0Njw1Bn9AL37oKQRYWIoaHryMAjVI0xlVr25fQFUylJrw/exec'; // Replace with your GAS Web App URL

// UNIVERSAL FETCH WRAPPER
async function callAPI(action, data = {}) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({ action, data })
        });
        const res = await response.json();
        if (!res.success) throw new Error(res.message);
        return res.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}

// REPLACING YOUR ORIGINAL FUNCTIONS
// Replace every "google.script.run..." with "callAPI" logic

async function requestOTP() {
    const adm = document.getElementById('login-adm').value.trim();
    const dob = document.getElementById('login-dob').value;
    if(!adm || !dob) return Swal.fire('Error', 'Fill details', 'warning');

    showLoader('Contacting Server...');
    try {
        const res = await callAPI('login', { admissionNo: adm, dob: dob });
        hideLoader();
        document.getElementById('display-email').innerText = res.maskedEmail;
        showPage('otp-page');
    } catch (e) {
        hideLoader();
        Swal.fire('Error', e.message, 'error');
    }
}

async function verifyOTP() {
    const adm = document.getElementById('login-adm').value.trim();
    const otp = document.getElementById('login-otp').value.trim();
    showLoader('Verifying...');
    try {
        const data = await callAPI('verifyOTP', { admissionNo: adm, otp: otp });
        hideLoader();
        currentStudentData = data;
        localStorage.setItem('shiksha_session', data.admissionNo);
        loadStudentDashboard();
        showPage('student-dashboard');
    } catch (e) {
        hideLoader();
        Swal.fire('Error', e.message, 'error');
    }
}

// ... Do this for fetchAllStudents (admin), addPayment, etc.
// Example for Real-Time Sync:
async function checkUpdates() {
    if (isUserScrolling) return;
    try {
        const serverVersion = await callAPI('getVersion');
        // Rest of your sync logic remains same...
    } catch(e) {}
}
