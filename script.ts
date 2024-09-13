//listing elements
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Type assertion  
    
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement


    const fullNameElement = document.getElementById('fullName') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
        

        //check if all form elements are present

    if ( profilePictureInput && fullNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement ) {
        //** */


    // Get form values
    const fullName = fullNameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;




    //PICTURE ELEMENT
    const profilePictureFile = profilePictureInput.files?.[0]      
      const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '' ;




    
    // Creating resumehtml
    const resumeHTML = ` 
    <h2>Resume</h2>            
      ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture">` : ''}


    <p><strong>Full Name:</strong> ${fullName}  </p>
    <p><strong>Email:</strong>  ${email} </p>
    <p><strong>Phone:</strong>  ${phone}  </p>
    
    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    
    `;


    //display resume in output container


    //resume output
    
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeHTML; 
    resumeOutputElement.classList.remove('hidden');

    //CREATE CONTAINER FOR BUTTONS
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer';
    resumeOutputElement.appendChild(buttonContainer);

    //ADD DOWNLOAD PDF BUTTON
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download as PDF';
    downloadButton.addEventListener('click', () => {
        window.print(); //OPEN THE PRINT DIALOG , ALLOWING THE USER TO SAVE AS PDF 
    });
    buttonContainer.appendChild(downloadButton);
    //ADD SSHAREABLE LINK BUTTON


    const shareLinkButton = document.createElement('button');
    shareLinkButton.textContent = 'Copy Shareable Link';
    shareLinkButton.addEventListener('click', async() => {
        try {
            //create a unique sharable link
            const shareableLink = `http://yourdomain.com/resumes/${fullName.replace(/\s+/g,

             '_')}_resume.html`;

             //copy to clipboard
            await navigator.clipboard.writeText(shareableLink);
            alert('Shareable link copied to clipboard');
        } catch (error){

            console.error('Failed to copy shareable link', error);
            alert('Failed to copy shareable link,please try again.');
        }
    });

    buttonContainer.appendChild(shareLinkButton);

    } else {
        console.error('resume output container not found');

    }
} else {
    console.error('form elements are missing');
    
}
    });



  
    
    