/* =====================================================
    FAMILY DATA
===================================================== */

const familyData = {
    familyHead: {
        name: "Shaikh Basheer",
        role: "Family Head",
        image: "images/dada.jpeg"
    },
    1: {
    name: "Shaikh Khalil Bhai",
    role: "Eldest Brother",
    image: "images/brother1.jpeg",
    profession: "Business Leader",
    education: "",
    location: "Wazar (Khurd)",
    description: "A respected business leader and a dedicated member of the community, who has served as Sarpanch, Member of Gram Panchayat, and Member of the Board of Directors. His leadership, dedication and commitment have always been an inspiration to our family and community.",
        children: [
        {
    name: "Shaikh Jalil",
    role: "ZP Teacher",
        profession: "ZP Teacher",
    image: "images/child1.jpeg",
    education: "D.Ed (Diploma in Education) & B.Ed (Bachelor of Education)",
    location: "Jalna, Maharashtra",
    about: "A dedicated and passionate JPT Teacher with a strong academic background in education. He holds both D.Ed (Diploma in Education) and B.Ed (Bachelor of Education) qualifications."
},
         {
    name: "Shaikh Taufiq",
    role: "MSF (Maharashtra Special Force)",
        profession: "MSF (Maharashtra Special Force)",
    image: "images/child2.jpeg",
    education: "B.Ed (Bachelor of Education)",
    location: "Parbhani, Maharashtra",
    about: "A disciplined and dedicated professional serving with the Maharashtra Special Force, known for his commitment, responsibility, and strong sense of duty."
},
        ]
    },
    2: {
    name: "Shaikh Shagir",
    role: "Second Brother",
    image: "images/brother2.jpeg",
    profession: "Fish Farmer & Pond Owner",
    location: "Wazar (Khurd)",
    description: "A dedicated fish farmer and pond owner who manages Gotra Pond, specializing in raising and selling fish. His hard work and experience in fish farming have made this his successful profession.",
       children: [

    {
        name: "Shaikh Alim",
        role: "Fish Farming (Business Man)",
        profession: "Fish Farming (Business Man)",
        image: "images/child4.jpeg",
        education: "10 th Pass",
        location: "Wazar (Khurd)",
        about: "A hardworking and dedicated businessman involved in fish farming, with a strong focus on managing and growing his fish farming business."
    },

    {
        name: "Shaikh Salim",
        role: "Fish Farming (Business Man)",
        profession: "Fish Farming (Business Man)",
        image: "images/salim.jpeg",
        education: "12 th Pass",
        location: "Lonar",
        about: "A dedicated businessman engaged in fish farming, committed to maintaining quality, managing operations, and building a successful business."
    },

    {
        name: "Shaikh Kalim",
        role: "Pland Operator",
        profession: "Pland Operator",
        image: "images/child6.jpeg",
        education: "10 th Pass",
        location: "Pune",
        about: "A hardworking entrepreneur involved in fish farming, focused on raising and selling fish while continuously growing his business."
    }

]
    },
    3: {
         name: "Shaikh Ahamad",
    role: "Third Brother",
    image: "images/brother3.jpeg",
    profession: "Farmer",
    education: "",
    location: "Wazar",
    description: "A hardworking and dedicated farmer who practices different types of farming and is committed to cultivating crops with experience and dedication.",
        children: [
            {
                name: "Shaikh Aref",
        role: "Software Engineer",
        profession: "Software Engineer",
        image: "images/childA.jpeg",
        education: "BCA (Bachelor of Computer Applications) & Full Stack Web Development with React.js",
        location: "Hyderabad, Telangana",
        about: "A passionate Software Engineer with a BCA degree who completed Full Stack Web Development training with React.js, focused on building modern and user-friendly web applications.",
            },
            {
               name: "Shaikh Atif",
    role: "MSF (Maharashtra Special Force)",
    profession: "MSF (Maharashtra Special Force)",
    image: "images/child8.jpeg",
    education: "BA (Bachelor of Arts)",
    location: "Mumbai, Maharashtra",
    about: "A disciplined and dedicated professional serving with the Maharashtra Special Force, known for his commitment, responsibility, and strong sense of duty.",
            }
        ]
    },
    4: {
        name: "Shaikh Chand",
    role: "Fourth Brother",
    image: "images/brother4.jpeg",
    profession: "Fish Farmer",
    education: "",
    location: "Wazar (Khurd)",
    description: "A hardworking and dedicated fish farmer who specializes in raising and managing fish, contributing to the growth of fish farming with experience and commitment.",
     children: [

    {
        name: "Shaikh Asef",
        role: "Poultry (Boiler Hen) Farm",
        profession: "Poultry Farm Business",
        image: "images/asef1.jpeg",
        education: "BA (Bachelor of Arts)",
        location: "Wazar",
        about: "A hardworking and dedicated poultry farmer who manages a boiler hen farm with commitment and experience in poultry farming and business."
    },

    {
        name: "Shaikh Pashu",
        role: "Mechanical",
        profession: "Mechanical Professional",
        image: "images/pasu.jpeg",
        education: "BA (Bachelor of Arts)",
        location: "Wazar",
        about: "A skilled and dedicated mechanical professional who is committed to his work and continuously developing his technical knowledge and experience."
    },

    {
        name: "Shaikh Sameer",
        role: "Hafiz Sahab",
        profession: "Hafiz Sahab",
        image: "images/sameer1.jpeg",
        education: "12th Pass",
        location: "Jalna, Maharashtra",
        about: "A respected and dedicated individual known for his knowledge, discipline, and commitment to his religious and community responsibilities."
    },

    {
        name: "Shaikh Zaheer",
        role: "Software Engineer",
        profession: "Software Engineer",
        image: "images/jaheer1.jpeg",
        education: "BCA (Bachelor of Computer Applications) & .NET Full Stack Development",
        location: "Hyderabad, Telangana",
        about: "A passionate Software Engineer with a BCA degree who completed .NET Full Stack Development after graduation, focused on building modern and efficient web applications."
    },

    {
        name: "Shaikh Javed",
        role: "Maharashtra Police",
        profession: " Maharashtra Police ",
        image: "images/javed.jpeg",
        education: "BA (Bachelor of Arts)",
        location: "Pune, Maharashtra",
        about: "A disciplined and dedicated professional serving with the Maharashtra Police, committed to duty, responsibility, and serving the community."
    }

]
    }
};

function setActiveNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length) return;

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function renderFamilyTree() {
    const familyHead = familyData.familyHead;
    const familyHeadImage = document.getElementById('familyHeadTreeImage');
    const familyHeadName = document.getElementById('familyHeadTreeName');
    const familyHeadRole = document.getElementById('familyHeadTreeRole');
    const familyTreeMembers = document.getElementById('familyTreeMembers');

    if (familyHeadImage) {
        familyHeadImage.src = familyHead.image;
        familyHeadImage.alt = familyHead.name;
    }
    if (familyHeadName) familyHeadName.textContent = familyHead.name;
    if (familyHeadRole) familyHeadRole.textContent = familyHead.role;

    if (familyTreeMembers) {
        const members = Object.keys(familyData)
            .filter((key) => key !== 'familyHead')
            .sort((first, second) => Number(first) - Number(second))
            .map((key) => familyData[key]);

        familyTreeMembers.innerHTML = members.map((member) => `
            <div class="tree-member">
                <div class="member-icon">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <h4>${member.name}</h4>
                <span>${member.role}</span>
            </div>
        `).join('');
    }
}

function renderFamilyPage() {
    const params = new URLSearchParams(window.location.search);
    const member = params.get('member') || '1';
    const selectedFamily = familyData[member];

    if (!selectedFamily) return;

    const familyTitle = document.getElementById('familyTitle');
    const familyImage = document.getElementById('familyImage');
    const familyImageWrap = document.getElementById('familyImageWrap');
    const headName = document.getElementById('headName');
    const headDescription = document.getElementById('headDescription');
    const profession = document.getElementById('profession');
    const education = document.getElementById('education');
    const locationText = document.getElementById('location');
    const childrenContainer = document.getElementById('childrenContainer');

    if (familyTitle) familyTitle.textContent = `${selectedFamily.name}'s Family`;
    if (familyImage) familyImage.src = selectedFamily.image;
    if (familyImageWrap) familyImageWrap.className = `profile-main-image profile-member-${member}`;
    if (headName) headName.textContent = selectedFamily.name;
    if (headDescription) headDescription.textContent = selectedFamily.description;
    if (profession) profession.textContent = selectedFamily.profession;
    if (education) education.textContent = selectedFamily.education;
    if (locationText) locationText.textContent = selectedFamily.location;

    if (childrenContainer) {
        childrenContainer.innerHTML = selectedFamily.children.map((child, index) => `
            <div class="col-lg-4 col-md-6">
                <div class="child-card child-${index + 1}">
                    <div class="person-image member-${member}">
                        <img src="${child.image}" alt="${child.name}">
                        <div class="image-overlay"><i class="bi bi-person-lines-fill"></i></div>
                    </div>
                    <div class="person-content">
                        <span class="person-number">${String(index + 1).padStart(2, '0')}</span>
                        <h3>${child.name}</h3>
                        <p class="person-role">${child.profession}</p>
                        <p><strong>Education:</strong> ${child.education}</p>
                        <p>${child.about}</p>
                        <a href="profile.html?member=${member}&child=${encodeURIComponent(child.name)}" class="family-btn">View Profile <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderProfilePage() {
    const params = new URLSearchParams(window.location.search);
    const member = params.get('member') || '1';
    const childName = params.get('child');
    const selectedFamily = familyData[member];

    if (!selectedFamily) return;

    const profileName = document.getElementById('profileName');
    const profileRole = document.getElementById('profileRole');
    const profileImage = document.getElementById('profileImage');
    const profileImageWrap = document.getElementById('profileImageWrap');
    const profileHeading = document.getElementById('profileHeading');
    const profileAbout = document.getElementById('profileAbout');
    const profileEducation = document.getElementById('profileEducation');
    const profileProfession = document.getElementById('profileProfession');
    const profileLocation = document.getElementById('profileLocation');

    let person = selectedFamily;
    if (childName) {
        const child = selectedFamily.children.find((item) => item.name.toLowerCase() === decodeURIComponent(childName).toLowerCase());
        if (child) person = child;
    }

    if (profileName) profileName.textContent = person.name;
    if (profileRole) profileRole.textContent = person.role;
    if (profileImage) profileImage.src = person.image;
    if (profileImageWrap) {
        profileImageWrap.className = `profile-main-image profile-member-${member}`;
        if (childName && person !== selectedFamily) {
            profileImageWrap.classList.add('child-profile-image');
        }
    }
    if (profileHeading) profileHeading.textContent = `About ${person.name}`;
    if (profileAbout) profileAbout.textContent = person.about || person.description;
    if (profileEducation) profileEducation.textContent = person.education || selectedFamily.education;
    if (profileProfession) profileProfession.textContent = person.profession || 'Profession not provided';
    if (profileLocation) profileLocation.textContent = person.location || selectedFamily.location;

    const backLink = document.querySelector('.back-btn');
    if (backLink) {
        backLink.setAttribute('href', `family.html?member=${member}`);
        backLink.innerHTML = '<i class="bi bi-arrow-left"></i> Back to Family';
    }
}

if (document.getElementById('childrenContainer')) {
    renderFamilyPage();
}

if (document.getElementById('familyTreeMembers')) {
    renderFamilyTree();
}

if (document.getElementById('profileImage')) {
    renderProfilePage();
}

setActiveNavLinks();