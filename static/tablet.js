// Sample records data (you can replace this with your actual data)
const records = [
    { name: "Fever-Paracetamol", description: "Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever). It's typically used to relieve mild or moderate pain, such as headaches, toothache or sprains, and reduce fevers caused by illnesses such as colds and flu.", image: "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg" },
 { name: "fever-Dol650", description: "Dolo 650 Tablet is a medicine used to relieve pain and reduce fever. It is used to treat many conditions such as headaches, body aches, toothaches, and the common cold. The medication works by inhibiting the release of certain chemicals which can cause pain and fever.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92u3IeWpsJWjgdx59LFMQUKhGQEUW_63KrnErsoP0S_K70M9vNOPxPmYM&s=10" },
{ name: "Skin Allergies-Cetirizine", description: "CETIRIZINE is prevents and treats allergy symptoms, such as red, itchy eyes, sneezing, a runny or stuffy nose, or hives. It works by blocking histamine, a substance released by the body during an allergic reaction. It belongs to a group of medications called antihistamines.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkQLUGucGSQOFfMY5DOJdAwOTQ7Eez1U_Qr2e10IUeA6yyrl3bz4sIb4&s=10" },
{ name: "skin Allergies-Loratadine", description: "Loratadine is used to temporarily relieve the symptoms of allergy to pollen, dust, or other substances in the air and other allergies. These symptoms include sneezing, runny nose, and itchy eyes, nose, or throat. Loratadine is also used to treat itching and redness caused by hives.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEse1px5lWjHVHXIsjcAvzjzeXDxlTvxKubUGzkvRbDlxg6c3qbyaE-rg&s=10"},
{ name: "Conjunctivitis-Chloromphenicol", description: "Chloramphenicol is an antibiotic medicine. It's mainly used to treat eye infections (such as conjunctivitis) and sometimes ear infections. Chloramphenicol comes as eyedrops or eye ointment. These are available on prescription or to buy from pharmacies.", image: "https://5.imimg.com/data5/SELLER/Default/2022/9/YJ/RQ/PH/153145243/chloramphenicol-eye-capsule.jpg" },
{ name: "Conjunctivitis- Ciprofloxacin", description: "Ciprofloxacin eye drops and eye ointment are used to treat infections of the eye, such as bacterial conjunctivitis. Ciprofloxacin eye drops is also used to treat corneal ulcers of the eye. Ciprofloxacin belongs to a group of medicines called fluoroquinolone antibiotics.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRR3iaHY2f4aHI68EkJwL_VboZiZFzld6qlWUsjamFOZ2m9IWTtSDQZ94&s=10" },
{ name: "Cough- Dextromethorphan", description: " Dextromethorphan is used to temporarily relieve cough caused by the common cold, the flu, or other conditions. Dextromethorphan will relieve a cough but will not treat the cause of the cough or speed recovery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjQSdOT51_dskFL_tacoi5PEdB7fiWONDK0oJFn7e9ykmI7H4mWSlpO9C&s=10" },
 { name: "Headache-Acetaminophen", description: " Acetaminophen is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, reactions to vaccinations (shots), and to reduce fever.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNS3vwhZrPOqMFSEnuTpd0R4lcnLt1zVcl-ZZMmKtb4AY0vT1k5Gs134d1&s=10" },
{ name: "Fever-Acetaminophen", description: "Acetaminophen is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, reactions to vaccinations (shots), and to reduce fever", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOvaw4Vrhw7smM5FKHix8hSIqSzuW46RLv__zP0Cp--pQ7aajc8IGzVBW&s=10" },
{ name: "Headache-Asprin", description: "Aspirin is used to reduce fever and relieve mild to moderate pain from conditions such as muscle aches, toothaches, common cold, and headaches. It may also be used to reduce pain and swelling in conditions such as arthritis.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7M7I9y2Sl2NKVKwSdwnXxPJNYNUh-rEvdfw&usqp=CAU" },
{ name: "Earpain-ibuprifen", description: " If your earache is caused by a middle ear infection, it's likely to get better on its own within 7 days and usually won't need antibiotics. Until the pain gets better, you can use simple pain relief medicines like paracetamol or ibuprofen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_ZmEyUn9A2ncowR3ZOZfqEjO5ehoAATc4gEkX9SUwb4HWRGCjN-kyGlY&s=10" },
{ name: "Bodypain-Naproxen", description: " Naproxen is a powerful anti-inflammatory drug used to alleviate inflammation and the pain that often accompanies it. It is widely considered a strong painkiller and is part of the category of medicines known as non-steroidal anti-inflammatory drugs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZBw9DF0LpfjzJJfWun2peEDexxda5uuFOIv9TSNygwI7iXk352e9qV99&s=10" },
{ name: "Rashes-Hydrocortisone", description: "Hydrocortisone cream is a medicated lotion, ointment or solution that treats eczema and other skin conditions that cause swelling, redness, itching and rashes. It's a type of topical steroid that works by decreasing inflammation in your skin.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqJYzBQOtetEBUYDVSm-fPDFPnyZosx90dmG13K_fqeodijeycH2suVs&s=10" },
{ name: "Rashes-Benadryl", description: "Benadryl is an antihistamine that reduces the effects of natural chemical histamine in the body. Histamine can produce symptoms of sneezing, itching, watery eyes, and runny nose. Benadryl is used to treat sneezing, runny nose, watery eyes, hives, skin rash, itching, and other cold or allergy symptoms.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79zn4-xXWbp6ziHE72VPAZ2BFmpLoVaAUa0teXtCYFgLVKf9F-gwrOuE&s=10" },
{ name: "Rashes-zyrtec", description: "Cetirizine is an antihistamine medication that treats allergy symptoms like itchy eyes, sneezing, a stuffy nose or hives. A common brand name for this medication is Zyrtec®.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRnIILfS08WsPp6D95j6cx0XsIUSalllG82Vl5bbqLwQl1r_3YX-P5GLk&s=10" },
{ name: "Common Cold-chlorpheniramine", description: "Chlorpheniramine helps control the symptoms of cold or allergies but will not treat the cause of the symptoms or speed recovery. Chlorpheniramine is in a class of medications called antihistamines. It works by blocking the action of histamine, a substance in the body that causes allergic symptoms.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrkKEnlmEWZoREwBese_JholEUVNufk6T90HSifLbzE_1hJj106laikrd&s=10" },
{ name: "Common Cold-Diphenhydramine", description: "Diphenhydramine is used to relieve red, irritated, itchy, watery eyes; sneezing; and runny nose caused by hay fever, allergies, or the common cold. Diphenhydramine is also used to relieve cough caused by minor throat or airway irritation", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYeir-ujR2HMMgcUcgW4dXV4dpOzHNaLxo0cAcSfKUKT-KRBRoWRHcew&s=10" },
{ name: "Stomach Pain-Loperamide", description: "This combination medication is used to treat diarrhea and symptoms of gas (such as cramps, bloating, pressure). Loperamide works by slowing down the movement of the gut. This decreases the number of bowel movements and makes the stool less watery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBRbCK30T_6f13O6JZrTlwo-v6IFsG0Zoe11NhsJ_IP3u8WsIZWRlnMs&s=10" },
{ name: "Stomach Pain-Bismuth Subsalicylate", description: "BISMUTH SUBSALICYATE treats occasional diarrhea. It may also be used to treat the symptoms of an upset stomach including heartburn, indigestion, and gas. It belongs to a group of medications called antidiarrheals.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAN4oIK-knqTNxlda2A3NbTQRARhQkFiblvQsEUGTFFRQVgjMk09ni7w22&s=10" },
{ name: "Flu-Oseltamivir", description: "Oseltamivir is used in the treatment of the infection caused by the flu virus (influenza A and influenza B). Oseltamivir may also be used to prevent and treat swine influenza A. Oseltamivir may reduce flu symptoms (weakness, headache, fever, cough, runny or stuffy nose, and sore throat)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT771tgTe5ZH-Tm7g1ZAPnwB_TCFJ1BjcPs6MTHK5aik9iYmPvQ0m1OseDy&s=10" },
{ name: "Asthama-Beclomethasone", description: "Beclomethasone is used to help control the symptoms of asthma and improve breathing. It is used when a patient's asthma has not been controlled sufficiently on other asthma medicines, or when a patient's condition is so severe that more than one medicine is needed every day", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4p5eDEieN-br5GVy-SSRzbEIyW9FMxgDfS_PNwtFDX2O1wcA41NDixk&s=10" },
{ name: "Asthama-Budesonide", description: "Budesonide is used to help prevent the symptoms of asthma. When used regularly every day, inhaled budesonide decreases the number and severity of asthma attacks. However, it will not relieve an asthma attack that has already started. Budesonide is a corticosteroid or steroid (cortisone-like medicine).", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Qg0t18oyZxXuJuS6aJAwqVFDic7pWTULSuBOZk30uqXLA1J0J1luOlk&s=10" },
{ name: "Asthama-fluticasone nasal spray ", description: "Fluticasone nasal spray is used to treat sneezing, itchy or runny nose, or other symptoms caused by hay fever. It is also used to treat chronic rhinosinusitis with or without nasal polyps (CRSwNP) in adults. This medicine belongs to the family of medicines known as corticosteroids (cortisone-like medicines).", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHCbcWo39Xwd9skNUZLK_XGqg7GhxfNecANT5VxIDFNXRKy3xlVhxwDFg&s=10" },
{ name: "Low Bp-Midodrine", description: "Midodrine is used to treat low blood pressure (hypotension). It works by stimulating nerve endings in blood vessels, causing the blood vessels to tighten. As a result, blood pressure is increased.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFLFFYAq5jiCQRc6vsLlWsTB0qs4MQHAU0M7ZJC3c5qhidUpr9bbnG4w&s=10" },
{ name: "High Bp-Perindropril", description: "Perindopril is a medicine used to treat high blood pressure (hypertension) and heart failure. It's also prescribed after a heart attack. Perindopril helps to reduce the risk of future strokes and heart attacks. It also improves your survival if you're taking it following a heart attack or heart surgery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6H7jp9V_BG2um0ZWbBy-nISrmR5YFSw7Sms7pHGKSkyI58VN_pBJ0CaA&s=10" },
{ name: "High Bp-Ramipril", description: "Ramipril is a medicine widely used to treat high blood pressure (hypertension) and heart failure. It's also prescribed after a heart attack. Ramipril helps prevent future strokes, heart attacks and kidney problems.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8qdP8-V_JcwIM99cGUkKNy5BHlo1m_3OfQEo-U5_Cg0A37OCwv07RKVN&s=10" },
{ name: "High Bp-Enalapril", description: " Enalapril is an angiotensin converting enzyme (ACE) inhibitor. It works by blocking a substance in the body that causes the blood vessels to tighten. As a result, enalapril relaxes the blood vessels. This lowers blood pressure and increases the supply of blood and oxygen to the heart.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnYT8Lej9PaDHuGklwOWJyTQjwpvHB2audnI_XBkhtv2eebVIjQELJ8w&s=10" },
{ name: "Burning Skin-Bacitracin", description: " Bacitracin is a topical antibiotic ointment widely used by both medical professionals and the general public to treat minor skin injuries, including cuts, scrapes, and burns. Bacitracin can be used as a single agent ointment or in combination as a triple therapy ointment, with neomycin and polymyxin B.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckYQiexr75BfsH_bzZJQkuerdie37TBYqkEuw8cze0TihHSQsrdUbFkU&s=10" },
{ name: "Burning Skin-Silvadene", description: " Silver sulfadiazine cream is used to prevent and treat wound infections in patients with second- and third-degree burns. Patients with severe burns or burns over a large area of the body must be treated in a hospital. Silver sulfadiazine is an antibiotic. It works by killing the bacteria or preventing its growth.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-Ms1AwVkg37e_v3ASjTLfdWvFRURx9mdt8KrlTh_VB-dxYPTgS_HZyQ&s=10" },
{ name: "Athletes Foot-Itraconazole", description: "Itraconazole tablet is only used to treat onychomycosis of the toenails. This medicine works by killing the fungus or yeast and preventing its growth. This medicine is available only with your doctor's prescription. ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5KI0WjNMI5i61X4mr3kosgyNgqumqRmAwS3YWnKFa6WaI35r7mana3M&s=10" },
{ name: "Athletes Foot-Terbinafine", description: " It works by killing the fungus or preventing its growth. Terbinafine is applied to the skin to treat: ringworm of the body (tinea corporis); ringworm of the foot (interdigital and plantar tinea pedis; athlete's foot);", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDPiDuUzDYAXgAh1UW88vPhl5OLfETlHWgA&usqp=CAU" },
{ name: "Dust Allergies-fexofenadine", description: "These drugs relieve itching, sneezing and runny nose. Over-the-counter antihistamine tablets, such as fexofenadine (Allegra Allergy), loratadine (Alavert, Claritin,), cetirizine (Zyrtec) and others, as well as antihistamine syrups for children, are available. ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMx4RfVbW8qk4TsXKDUdp2mJAzq7VYOsSW30qVDUfFB12tJYQm1-LnpGR&s=10" },
{ name: "Dust Allergies-loratadine", description: " These drugs relieve itching, sneezing and runny nose. Over-the-counter antihistamine tablets, such as fexofenadine (Allegra Allergy), loratadine (Alavert, Claritin,), cetirizine (Zyrtec) and others, as well as antihistamine syrups for children, are available", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyzWOjGNFAXXke0-6RBc-3R6OQ-B43MBOxqfF-mHnUrQajXiZt3_ntRM&s=10" }, 
{ name: "Gastic-Rabeprazole", description: "Rabeprazole prevents proton pumps from working properly, and so reduces the amount of acid your stomach makes. When will I feel better? You should start to feel better within 2 to 3 days. But it may take up to 4 weeks for rabeprazole to work fully, so you may still have some symptoms during this time. ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEMgbjPXXpOXUO6W-nQthn-yr2Ikts0qlQ_fkpGj9UatpY82taQvFhJhW&s=10" },
{ name: "Gastic-Sompraz D 40 Capsule SR", description: " Sompraz D 40 Capsule is a prescription medication used to treat gastroesophageal reflux disease (Acid reflux) and indigestion by alleviating symptoms like heartburn, stomach pain, and irritation. It also neutralises stomach acid and promotes gas passage, which relieves stomach discomfort....", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq4zDdkAA2exbQkKxqpw2RybUm5Fmo-1dTbB4JFGwgjMal_PUdSmeEZQ&s=10" },
{ name: "Acidity-Simgel", description: " Simgel 480 mg/20 mg Suspension is a combination medicine used in the treatment of acidity, stomach ulcer, bloating. It neutralizes excessive acid in the stomach and helps in easy passage of gas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggqxpE7m2WQ6kW139GCU0c8oy0OQZz4C0WurFyB5ibv8449VLFoSocDY&s=10" },
{ name: "Acidity-Omeprazole", description: "Omeprazole is used to treat certain conditions where there is too much acid in the stomach. It is used to treat gastric and duodenal ulcers, erosive esophagitis, and gastroesophageal reflux disease (GERD). GERD is a condition where the acid in the stomach washes back up into the esophagus. ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0TrcSBW_Wk9aH1_vAx5FlQl4sBEAM7vkoaf8f_YgZjpxOYuPqECKwzFk&s=10" },
{ name: "Acidity-Rantac", description: "Rantac 150 tablet is used to treat stomach and intestinal ulcers, heartburn, hyperacidity, indigestion and gastroesophageal reflux disease (GERD). It contains ranitidine as its active ingredient. It works by reducing the amount of acid produced in the stomach, thus reducing the amount of acid present in the stomach. ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURSD4f--FOSvvzvFqz_aaCSzI8ajnOoVI8tBNz4QylHuZGgSTZxb-npb_&s=10" },
{ name: "Food Allergies-Desloratadine", description: "It is used for treating allergic symptoms caused by various allergies to food, dust, insect bites, medications, etc. Antihistamines are the group of drugs that work by blocking a chemical called histamine.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8pF_yyTNYHv8gvRhBtYbmZX_nG77IVtz6UD8rKRJ6GCe2W_s7hnVgkDR&s=10" },
{ name: "Chicken Pox-Acyclovir", description: " Chickenpox usually affects children from one to 14 years. In young babies, adults or people with impaired immune system, chickenpox is more severe. Treatments include lotions to relieve itchiness, paracetamol (acetaminophen) for fever and the antiviral drug acyclovir.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyu1niosNgufwr7ZTCbDBBOnmmKpbE49CIZQ&usqp=CAU" },
{ name: "Diabetes-Metformin", description: " Metformin is a medicine used to treat type 2 diabetes and gestational diabetes. It's also used to help prevent type 2 diabetes if you're at high risk of developing it. Type 2 diabetes is a condition where the body does not make enough insulin, or the insulin that it makes does not work properly", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KbM3cIbJr-JNl0VpMRsLLUbLfWjllrro0xS1PpsswnMnjiWrKsHI3EI&s=10" },
{ name: "Motions-Loperamide", description: "Loperamide is used to control and relieve the symptoms of acute diarrhea. It is also used to treat chronic diarrhea in patients with inflammatory bowel disease. Loperamide helps stop diarrhea by slowing down the movements of the intestines.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnbMggdfz5YujDLdStfAsQ9YR1zefIrk6HSm1dmD5aOD7LOb6iNGaEI4R&s=10" },
{ name: "Jaundice-Jaundinil", description: "Jaundinil offers a natural and potentially helpful resource for those dealing with jaundice. This supplement can help to regulate bilirubin levels in the bloodstream, which is essential for alleviating the yellowing of the skin and eyes associated with jaundice.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBHIOlg6DrqUibTo_G7zoR35OArSpoeBsgXsbc2RZBjkZfqLY7hWx3Vuc&s=10" }

];

// Function to display records based on search query
function displayRecords(query) {
    const recordsContainer = document.getElementById("recordsContainer");
    recordsContainer.innerHTML = ''; // Clear previous records

    // Filter records based on search query
    const filteredRecords = records.filter(record =>
        record.name.toLowerCase().includes(query.toLowerCase())
    );

    // Display filtered records
    filteredRecords.forEach(record => {
        const recordDiv = document.createElement('div');
        recordDiv.classList.add('record');

        // Create image element
        const image = document.createElement('img');
        image.src = record.image;
        image.alt = record.name;
        recordDiv.appendChild(image);

        // Create content div for name and description
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        // Create heading for name
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = record.name;
        contentDiv.appendChild(nameHeading);

        // Create paragraph for description
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = record.description;
        contentDiv.appendChild(descriptionParagraph);

        // Append content div to record div
        recordDiv.appendChild(contentDiv);

        // Append record div to container
        recordsContainer.appendChild(recordDiv);
    });
}

// Function to setup the page
function setup() {
    const searchBar = document.getElementById("searchBar");

    // Add event listener to search bar input
    searchBar.addEventListener('input', () => {
        displayRecords(searchBar.value.trim());
    });

    // Display all records initially
    displayRecords('');
}

// Call setup function to initialize the page
setup();