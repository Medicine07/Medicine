// Predefined data with age limits
var records = [
    { name: "KID CARE PROTEIN POWDER", ageLimit: [1,6], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5LL0gzgOFTaFxsS5TJckTgzFYFuTXu_JzA&s", description: "Kids Care Protein Powder is the 'complete' one, as it has all the essential amino acids which play a huge role in the development of the child's body. Ingredient: Whey Protein Concentrate, Skimmed Milk Powder, Minerals, Vitamins, Benefits: It helps children to grow faster in a natural process." },
    { name: "NESTLÉ NAN PRO", ageLimit: [1,6], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9fH3-vm1hd60hIU75LQZcIvMfDBDpgF-TbGl1Lg-WQ&s", description: "NESTLÉ NAN PRO  is a spray dried Follow-Up formula with DHA ARA for older infants after 18 to 24 months when they are not breastfed. NAN PRO 4 contains DHA that supports baby's normal brain development. It also contains Calcium, Vitamins A, C, D, Iron and Zinc." },
    { name: "kid protein", ageLimit: [1,6], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9fH3-vm1hd60hIU75LQZcIvMfDBDpgF-TbGl1Lg-WQ&s", description: "NESTLÉ NAN PRO  is a spray dried Follow-Up formula with DHA ARA for older infants after 18 to 24 months when they are not breastfed. NAN PRO 4 contains DHA that supports baby's normal brain development. It also contains Calcium, Vitamins A, C, D, Iron and Zinc." },
    { name: "vegan protein", ageLimit: [1,6], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR19v4iGCp6mtrCOxogx7dY_m-q_lb5GTLmuDbs2Mam2-FZvF9UcKolc&s", description: "Vegan protein powder can be made from virtually any legume, seed, or grain, from hemp seeds to brown rice to watermelon seeds. According to Wolfram, “vegan protein powders based on legumes like soy and pea protein powder” are going to provide the most high-quality, bioavailable protein" },
    { name: "APTAMIL GOLD", ageLimit: [1,6], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4aMeEYHFUJsyeTAtBvWwzCal3GR34lXaEQ&s", description: "Aptamil contains balanced, age-appropriate nutrients to support the overall growth and development of the baby. The unique blend of GOS & FOS, Nucleotides, Zinc, Selenium, Vitamin A, C, E and Beta Carotene in Aptamil powder support immune health" },
    { name: "NUTRIMIX", ageLimit: [1,6], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKC3nEh647QuYJRUijhzoeKfoBt7NedCtYIQ&s", description: "NATURALLY SWEETENED (NO ARTIFICIAL FLAVORS) - Nutrimix is not only a perfect blend of unique organic ingredients but also is naturally sweetened by popular Indian household ingredients like Dates & Jaggery. Jaggery is one of the best natural sweeteners." },
    { name: "PEDIASURE", ageLimit: [7,12], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfm6f8-usU8eDlwEIj7UOfLE9UjcK804go6kYl3m9Qig&s", description: "Pediasure is intended to help those who have an insufficient food intake and poor appetite. Illness, injury, surgery, or aging may cause poor appetite due to eating, chewing, and swallowing difficulties. The inability to get good nutrition over a prolonged time may lead to weight loss and malnutrition" },
    { name: "KIDDO VEDA", ageLimit: [7,12], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUnTeRJHUdiWNiTYHAo6yd9temUNsVfwoC2ItDrht4Q&s", description: "Unicity Kiddo Contains key essential nutrients to help kids grow. Each delicious shake provides protein, DHA, Colostrum, Fructo-oligosaccharides, 28 vitamins and minerals, and green goodness." },
    { name: "PRO N VITA", ageLimit: [7,12], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrHAV6gcvhtZiZBjolzgWej27i-KzeTzHp_MmtGEc8eIH9ZLnmRv8Ru8&s=10", description: "With a rich legacy of a Start up, Pro N Vita comes with high protein content (5g for every 100g) that helps you fight tiredness + fatigue and delights you with its rich, creamy taste! Lack of protein leads to loss of muscle strength which in turn leads to frequent tiredness and fatigues in our daily lives." },
    { name: "KID CARE PROTEIN POWDER", ageLimit: [1,6], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5LL0gzgOFTaFxsS5TJckTgzFYFuTXu_JzA&s", description: "Kids Care Protein Powder is the 'complete' one, as it has all the essential amino acids which play a huge role in the development of the child's body. Ingredient: Whey Protein Concentrate, Skimmed Milk Powder, Minerals, Vitamins, Benefits: It helps children to grow faster in a natural process." },
    { name: "NESTLÉ NAN PRO", ageLimit: [1,6], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9fH3-vm1hd60hIU75LQZcIvMfDBDpgF-TbGl1Lg-WQ&s", description: "NESTLÉ NAN PRO  is a spray dried Follow-Up formula with DHA ARA for older infants after 18 to 24 months when they are not breastfed. NAN PRO 4 contains DHA that supports baby's normal brain development. It also contains Calcium, Vitamins A, C, D, Iron and Zinc." },
    { name: "Boost", ageLimit: [7,12], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs658j5aglA2Wn-Xlb2W19RpfElLl0LYAzP-LB0MC460b4XAME6Xxpm98&s=10", description: "Boost has nutrients which help in maintenance of optimal bone & muscle strength. Boost is enriched with envita nutrients (iron, Vitamin A, C, folic acid, B12 and B6). Envita nutrients help transport oxygen more effectively in the body." },
    { name: "complan", ageLimit: [7,12], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1xXgG-zGO0eKvug_rzgsEHlz7oAuX7TCCA&usqp=CAU", description: "Complan is a scientifically designed drink for growing school children which contains 34 Vital nutrients like iron, Iodine, Vitamins, etc. along with the power of 100% milk protein. Complan is clinically proven to support Memory and Concentration in children." },
    { name: "ENSURE", ageLimit: [18,35], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIuJow0kaGBaTENf-M4nPhUbMSEcAIQBqPsZz4s6L7J0x6a-5YkRlS6rL&s=10", description: "Ensure can be used as a delicious meal supplement, occasional meal replacement, or convenient between-meal snack. Ensure can benefit people who are on modified diets, at nutritional risk, experiencing involuntary weight loss, recovering from illness or surgery, or on low-residue diets." },
    { name: "Protein mix", ageLimit: [7,12], image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LyL3hQ7JRYH1fRgOu928uFsI72qkI0sUwV8vHXFO3w&s " ,description: "protein shakes may help you achieve your fitness goals, whether you want to lose fat or gain muscle. Protein shakes promote muscle gain and improve performance and recovery. They also prevent muscle loss and may even help increase muscle mass during weight loss" },
    { name: "Prosource", ageLimit: [7,12], image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbE9T-EZ2x_w6I-xk421Rv9-mPK61bfxz0dJD3OYVb3rEwSPtFpq3V1TFk&s=10", description: "It's a concentrated, high quality protein powder which can be added to any type of food, beverage or enteral formula. Made from a blend of whey and casein protein powder, this unflavored powder provides 6 grams of protein per scoop" },
    { name: "Active mix", ageLimit: [13,18], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqet6UG6V4mur1cV0t7fcQtlMMvaisGtHpwTTr5bHun7Gbjv7gnqdpeMiX&s=10", description: "ActievMix is a blend of protein supplements for kids. A healthy blend of ragi, bajra, and multiple plant-based proteins for complete nutrition. It is naturally sweetened with jaggery and dates." },
    { name: "lactogen pro", ageLimit: [13,18], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiG5wXPSyU5E_NOEoEia0qXkqeuwuJ-BF3MFPbmQ_chsQiiXJfTQDypCM4&s=10", description: "Ensures adequate infant growth with daily weight gain. Inhibits colonization of pathogenic microbes. Reduces infection and inflammation. Promotes muscle strength and calorie rich to provide more energy" },
    { name: "Dexolac", ageLimit: [13,18], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbaR6K0kXunZ1Gf9iGGXRpPSG1NaUPs86BXlQBSLduAoTpWUxsCLuxEU&s=10", description: "Dexolac is powdered milk substitute. It is specially designed for the baby's overall growth & development. The milk fat with Beta Palmitate improves energy intake and calcium absorption, thereby strengthens the bones*." },
    { name: "MILLET", ageLimit: [18,35], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGJ1j4tYdg3MWbpKDQ3ITXxqjDgk6J3Rf3A2BR8whXLjMGKRY-0Zb5kkl&s=10", description: "Millet is a good source of protein, fiber, key vitamins, and minerals. The potential health benefits of millet include protecting cardiovascular health, preventing the onset of diabetes, helping people achieve and maintain a healthy weight, and managing inflammation in the gut." },
    { name: "PROTEIN PLUS", ageLimit: [18,35], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfk9hK3djCsGFmQ2iygdBV36J16j58Ns3NI89OLHZqC49t1YJp3IwsIk&s=10", description: "Protein Plus to your daily diet to help meet your daily protein needs. It delivers 34 g protein in 100 g of the product. It is rich in proteins which help to maintain muscle and support strength. To maintain muscle mass, one does not just need the right amount of Protein but also the right quality." },
    { name: "Protinex", ageLimit: [13,18], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzPlWyYeuXllA9K7H-F7x6QmNdjWlEabtO7hJ7-rsGj9SH8_gC7KmOGI&s=10", description: "Protinex contains Soy Protein Isolate. It is a source of high protein, calcium and iron. Compared to other regular milk food drinks, this has 50 per cent extra protein and is a 100 per cent vegetarian source of protein." },
    { name: "ESSENTIAL", ageLimit: [18,35], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSnvwnnasGuC2Gav0RmJxDB5mttn1keoIbRYGelPyvUGD-FmdpH8L27E&s=10", description: "Essential Powder is an essential high protein supplement that can be digested very easily. It is very beneficial for those battling with hypercatabolism. Essential Powder helps in maintaining the daily consumption of proteins and helps to stay healthy." },
    { name: "Dabur chawanprash", ageLimit: [18,35], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CfyjZDQLxxoTSPg3_3Sq_DLKmFqOwr0Tg1UbMFCRFi8dhjWVZhtFmJA&s=10", description: "Dabur Chyawanprash is a clinically tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold etc. caused by bacteria, viruses, dust and weather change." },
    { name: "Women's horlicks", ageLimit: [36,60], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-LAHxboEEvPb-7KbU1pR9a1kJFuiLDP79Dh61vngy-bWN1T8kJ_jLUnH&s=10", description: "Horlicks Women's Plus is a bone nutrition specialist powered with CALSEAL formula. It provides 100% RDA^ of Calcium, Vitamin D & Vitamin K2 requirements. NIH Osteoporosis and related bone diseases national resource center Ref: Malhotra N and Mithal A. Osteoporosis in Indians." },
    { name: "Pentasure", ageLimit: [36,60], image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwn89-dybNTZUGAl36z5TPyWsrnJJjk_HrT0Cb8xsKAMWB2I2M6UFM96w5&s=10", description: "Pentasure Powder is a Powder manufactured by Abbott India Ltd. It is commonly used for the diagnosis or treatment of Muscular hypertrophy, immune function, weight loss, low residue diet. It has some side effects such as Irritability, Garlic breath odor, fatigue, nail brittleness" },
    
    // Add more records as needed
];

function showRecords() {
    var age = parseInt(document.getElementById("age").value);
    var recordsContainer = document.getElementById("recordsContainer");
    recordsContainer.innerHTML = ""; // Clear previous records

    var recordsToShow;

    if (!age) {
        // Display all records if no age entered
        recordsToShow = records;
    } else {
        // Filter records based on the entered age
        recordsToShow = records.filter(function(record) {
            return age >= record.ageLimit[0] && age <= record.ageLimit[1];
        });
    }

    if (recordsToShow.length > 0) {
        recordsToShow.forEach(function(record) {
            var recordDiv = document.createElement("div");
            recordDiv.classList.add("record");

            var image = document.createElement("img");
            image.src = record.image;

            var recordInfo = document.createElement("div");

            var title = document.createElement("h2");
            title.textContent = record.name;

            var description = document.createElement("p");
            description.textContent = record.description;

            recordInfo.appendChild(title);
            recordInfo.appendChild(description);

            recordDiv.appendChild(image);
            recordDiv.appendChild(recordInfo);

            recordsContainer.appendChild(recordDiv);
        });
    } else {
        var noRecordsMessage = document.createElement("p");
        noRecordsMessage.textContent = "No records available for the entered age.";
        recordsContainer.appendChild(noRecordsMessage);
    }
}

// Initially display all records
showRecords();