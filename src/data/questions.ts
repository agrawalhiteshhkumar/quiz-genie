import { Question, Team } from '../types/quiz';

export const DPHARM_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. PHARMACEUTICS (ER20-11T)
  // =========================================================================
  {
    id: 'DP-PHARM-001',
    subject: 'Pharmaceutics',
    topic: 'History of Pharmacy Profession',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In which year and institution was the first 3-year Bachelor of Pharmacy (B.Pharm) degree program established in India under the leadership of Professor Mahadeva Lal Schroff?',
    options: [
      { key: 'A', text: '1842 at Escola Médica de Goa' },
      { key: 'B', text: '1937 at Banaras Hindu University (BHU)' },
      { key: 'C', text: '1948 at Bombay College of Pharmacy' },
      { key: 'D', text: '1901 at Bengal Chemicals, Calcutta' }
    ],
    correctKey: 'B',
    explanation: 'The Department of Pharmaceutics at BHU was established in 1932 by Prof. M. L. Schroff (Father of Indian Pharmacy Education), and the official 3-year B.Pharm degree began in 1937.',
    clinicalKeyPoint: 'March 6th is celebrated every year as National Pharmacy Education Day to honor Prof. M. L. Schroff\'s birth anniversary.',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): History of Pharmacy Profession.'
  },
  {
    id: 'DP-PHARM-002',
    subject: 'Pharmaceutics',
    topic: 'Packaging Materials Science',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which type of glass container is composed of treated soda-lime glass that has been de-alkalized with sulfur dioxide fumes at high temperatures, making it suitable for single-dose buffered aqueous injections?',
    options: [
      { key: 'A', text: 'Type I (Highly resistant borosilicate glass)' },
      { key: 'B', text: 'Type II (Treated de-alkalized soda-lime glass)' },
      { key: 'C', text: 'Type III (Regular soda-lime glass)' },
      { key: 'D', text: 'Type IV / NP (General-purpose non-parenteral glass)' }
    ],
    correctKey: 'B',
    explanation: 'Type II glass is produced by treating commercial soda-lime glass surfaces with SO2 under moist heat, neutralizing surface alkali. It is suitable for aqueous parenterals that are buffered below pH 7.0.',
    clinicalKeyPoint: 'Type I borosilicate glass remains mandatory for unbuffered parenterals, strong acids, and alkalis due to minimal thermal expansion and ion leaching.',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Packaging Materials.'
  },
  {
    id: 'DP-PHARM-003',
    subject: 'Pharmaceutics',
    topic: 'Size Reduction Equipment',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'In a cylindrical industrial ball mill, what distinct dynamic motion occurs when the mill is operated at its optimal critical speed (60% to 85% of critical speed), where balls reach the upper periphery before dropping directly onto the feed bed?',
    options: [
      { key: 'A', text: 'Cascading (rolling and jumping at low speed where attrition predominates)' },
      { key: 'B', text: 'Cataracting (balls thrown from the top to impact the material at the bottom)' },
      { key: 'C', text: 'Centrifuging (balls pinned to outer walls by centrifugal force with zero grinding)' },
      { key: 'D', text: 'Fluidized suspension (inter-particle jet collision)' }
    ],
    correctKey: 'B',
    explanation: 'At optimal critical speed, the ball mill exhibits cataracting: balls are carried up nearly to the top and fall parabolically, maximizing impact force combined with attrition.',
    clinicalKeyPoint: 'Centrifuging occurs when speed is excessive, causing grinding balls to rotate with the shell without falling, halting size reduction.',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Unit Operations (Size Reduction).'
  },
  {
    id: 'DP-PHARM-004',
    subject: 'Pharmaceutics',
    topic: 'Size Separation Standards (IP)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'According to the Indian Pharmacopoeia standards for powder fineness, a "Moderately Coarse Powder" is officially defined as a powder where:',
    options: [
      { key: 'A', text: 'All particles pass through Sieve No. 10 and not more than 40% pass through Sieve No. 44' },
      { key: 'B', text: 'All particles pass through Sieve No. 22 and not more than 40% pass through Sieve No. 60' },
      { key: 'C', text: 'All particles pass through Sieve No. 44 and not more than 40% pass through Sieve No. 85' },
      { key: 'D', text: 'All particles pass through Sieve No. 85 and not more than 40% pass through Sieve No. 120' }
    ],
    correctKey: 'B',
    explanation: 'IP specifications: Coarse (10/44), Moderately Coarse (22/60), Moderately Fine (44/85), Fine (85/120), and Very Fine (all pass Sieve 120).',
    clinicalKeyPoint: 'Sieve 22 has a nominal aperture size of 710 µm, while Sieve 60 corresponds to 250 µm.',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Size Separation.'
  },
  {
    id: 'DP-PHARM-005',
    subject: 'Pharmaceutics',
    topic: 'Tablet Coating Formulation & Defects',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'During aqueous film coating of biconvex tablets, the coating film shrinks and detaches away from the bisect and debossed brand lettering across sharp tablet edges. What is this coating defect, and how is it corrected?',
    options: [
      { key: 'A', text: 'Orange peel effect; corrected by thinning the viscous spray solution' },
      { key: 'B', text: 'Bridging; corrected by increasing plasticizer concentration and lowering solution viscosity' },
      { key: 'C', text: 'Blistering; corrected by increasing the drying inlet air temperature' },
      { key: 'D', text: 'Blooming; corrected by increasing the molecular weight of the plasticizer' }
    ],
    correctKey: 'B',
    explanation: 'Bridging occurs when coating film pulls away from the debossed contours due to excessive internal shrinkage stress or high solution viscosity. Adding more plasticizer increases film elasticity.',
    clinicalKeyPoint: 'Orange peel is caused by rapid drying or incomplete atomization, while blistering arises from solvent entrapment under rapid surface drying.',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Solid Dosage Forms (Coating).'
  },
  {
    id: 'DP-PHARM-006',
    subject: 'Pharmaceutics',
    topic: 'Pharmaceutical Calculations (Stock Dosing)',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A pediatrician prescribes 250 mg of Amoxicillin oral suspension three times daily for a child. The pharmacy stocks a dry powder reconstituted suspension labeled 125 mg / 5 mL. According to the formula [Volume = (Desired Dose / Stock Dose) × Stock Volume], how many milliliters (mL) must the caregiver administer per single dose?',
    options: [
      { key: 'A', text: '5.0 mL' },
      { key: 'B', text: '10.0 mL' },
      { key: 'C', text: '15.0 mL' },
      { key: 'D', text: '2.5 mL' }
    ],
    correctKey: 'B',
    explanation: 'Volume = (250 mg / 125 mg) × 5 mL = 2 × 5 mL = 10 mL.',
    clinicalKeyPoint: 'Always provide patients with an oral measuring syringe or calibrated medication cup rather than domestic tablespoons.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Pharmaceutical Calculations & Posology.'
  },
  {
    id: 'DP-PHARM-007',
    subject: 'Pharmaceutics',
    topic: 'Percentage Concentrations',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'In pharmaceutical dispensing and compounding calculations, a 1% w/v active drug concentration in an aqueous ophthalmic solution is exactly equivalent to how many milligrams per milliliter (mg/mL)?',
    options: [
      { key: 'A', text: '0.1 mg/mL' },
      { key: 'B', text: '1.0 mg/mL' },
      { key: 'C', text: '10.0 mg/mL' },
      { key: 'D', text: '100.0 mg/mL' }
    ],
    correctKey: 'C',
    explanation: '1% w/v represents 1 gram in 100 mL. Since 1 gram equals 1,000 milligrams: 1,000 mg / 100 mL = 10 mg/mL.',
    clinicalKeyPoint: 'Rapid clinical conversion rule: Multiply the percentage concentration by 10 to obtain mg/mL instantly.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Liquid Dosage Forms & Posology.'
  },
  {
    id: 'DP-PHARM-008',
    subject: 'Pharmaceutics',
    topic: 'Sterilization & Quality Control',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'What is the official biological indicator organism specified in the Indian Pharmacopoeia for validating the efficacy of moist heat sterilization in an autoclave operated at 121°C?',
    options: [
      { key: 'A', text: 'Bacillus atrophaeus (Bacillus subtilis)' },
      { key: 'B', text: 'Geobacillus stearothermophilus' },
      { key: 'C', text: 'Clostridium tetani' },
      { key: 'D', text: 'Pseudomonas aeruginosa' }
    ],
    correctKey: 'B',
    explanation: 'Geobacillus stearothermophilus spores demonstrate high thermal resistance against saturated steam at 121°C. Bacillus atrophaeus is utilized for dry heat and ethylene oxide validation.',
    clinicalKeyPoint: 'Autoclaving standard conditions: 121°C at 15 psi (103 kPa) gauge pressure for 15 to 20 minutes.',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Sterilization Methods.'
  },

  // =========================================================================
  // 2. PHARMACEUTICAL CHEMISTRY (ER20-12T)
  // =========================================================================
  {
    id: 'DP-CHEM-001',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Impurities & Limit Tests',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In the Indian Pharmacopoeia limit test for Iron, citric acid is added to the ammoniacal reaction solution containing thioglycolic acid. What is the precise function of citric acid in this assay?',
    options: [
      { key: 'A', text: 'To act as a primary reducing agent converting Fe2+ to Fe3+' },
      { key: 'B', text: 'To prevent premature precipitation of iron as ferric hydroxide [Fe(OH)3] by ammonia' },
      { key: 'C', text: 'To produce the purple-red chromophore through coordination complexation' },
      { key: 'D', text: 'To maintain an acidic pH below 3.0 during colorimetric comparison' }
    ],
    correctKey: 'B',
    explanation: 'Ammonia is added to render the solution alkaline so that ferrous thioglycollate develops its characteristic purple-red color. Citric acid forms an iron complex that prevents ammonia from precipitating iron as insoluble ferric hydroxide.',
    clinicalKeyPoint: 'Visual color intensity is evaluated in Nessler cylinders against a standard iron solution (20 ppm limit).',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry (ER20-12T): Limit Tests.'
  },
  {
    id: 'DP-CHEM-002',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Limit Test for Arsenic',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In the standard Gutzeit apparatus used for the IP Limit Test for Arsenic, which chemical paper and trapping agent are positioned in the exit tube to yield an analytical stain without sulfide interference?',
    options: [
      { key: 'A', text: 'Mercuric chloride paper at top; Lead acetate cotton plug in tube' },
      { key: 'B', text: 'Silver nitrate paper at top; Potassium iodide cotton plug in tube' },
      { key: 'C', text: 'Lead acetate paper at top; Mercuric chloride cotton plug in tube' },
      { key: 'D', text: 'Phenolphthalein paper at top; Barium chloride cotton plug in tube' }
    ],
    correctKey: 'A',
    explanation: 'Nascent hydrogen reduces arsenic into arsine gas (AsH3), which reacts with mercuric chloride paper to form a yellow-to-brown stain. The lead acetate cotton plug traps interfering hydrogen sulfide gas (forming lead sulfide).',
    clinicalKeyPoint: 'Arsenic trioxide standard is prepared at a 10 ppm permissible limit.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Limit Tests.'
  },
  {
    id: 'DP-CHEM-003',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Heterocyclic Chemistry & Nomenclature',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'According to the Hantzsch-Widman system of heterocyclic nomenclature, what is the systematic name for a fully saturated 5-membered heterocyclic ring containing one nitrogen atom?',
    options: [
      { key: 'A', text: 'Pyrrole' },
      { key: 'B', text: 'Pyrroline' },
      { key: 'C', text: 'Pyrrolidine' },
      { key: 'D', text: 'Piperidine' }
    ],
    correctKey: 'C',
    explanation: 'In Hantzsch-Widman rules, nitrogen uses the prefix "aza", 5-membered rings use stem "ol", and fully saturated nitrogenous 5-rings take the suffix "-olidine". Aza + ol + idine = Pyrrolidine.',
    clinicalKeyPoint: 'Pyrrole is fully unsaturated (aromatic), while piperidine is a 6-membered saturated nitrogen ring.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Heterocyclic Systems.'
  },
  {
    id: 'DP-CHEM-004',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Diazotization Titrations',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'Assays of primary aromatic amines such as Sulfamethoxazole and Dapsone are conducted via diazotization titration using sodium nitrite (NaNO2) in dilute hydrochloric acid. Why must the reaction temperature be strictly maintained at 0°C to 5°C with ice?',
    options: [
      { key: 'A', text: 'To prevent rapid crystallization and precipitation of the sulfonamide analyte' },
      { key: 'B', text: 'To prevent thermal decomposition of the formed diazonium salt into phenol and nitrogen gas' },
      { key: 'C', text: 'To prevent volatile evaporation of the indicator starch-iodide paste' },
      { key: 'D', text: 'To accelerate the diazotization equilibrium reaction kinetics' }
    ],
    correctKey: 'B',
    explanation: 'Aromatic diazonium salts (Ar-N2+ Cl-) are unstable and decompose into phenols, releasing N2 gas at temperatures exceeding 5°C. Low temperature stabilizes the diazonium intermediate.',
    clinicalKeyPoint: 'The end-point is detected externally using starch-iodide paper, which turns blue with excess nitrous acid.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Volumetric Analysis.'
  },
  {
    id: 'DP-CHEM-005',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antacids & Inorganic Chemistry',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'Why are Aluminium Hydroxide gel and Magnesium Hydroxide routinely co-formulated in commercial oral antacid suspensions (such as Magaldrate)?',
    options: [
      { key: 'A', text: 'Aluminium induces severe metabolic alkalosis while magnesium produces acidosis' },
      { key: 'B', text: 'Aluminium causes intestinal constipation, which neutralizes the osmotic diarrhea produced by magnesium' },
      { key: 'C', text: 'Magnesium accelerates gastric ulceration while aluminium accelerates stomach emptying' },
      { key: 'D', text: 'To double the absorption of dietary calcium' }
    ],
    correctKey: 'B',
    explanation: 'Al3+ ions relax gastrointestinal smooth muscle, delaying transit and causing constipation. Mg2+ ions retain water osmotically, inducing laxation. Combining them produces a bowel-neutral therapeutic balance.',
    clinicalKeyPoint: 'Patients must avoid taking antacids within 2 hours of fluoroquinolones or tetracyclines due to polyvalent cation chelation.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Gastrointestinal Agents.'
  },
  {
    id: 'DP-CHEM-006',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Cardiovascular Medicinal Chemistry',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Which antihypertensive agent contains a sulfhydryl (-SH) chemical functional group, which is responsible for both its potent ACE inhibition and characteristic adverse effects like taste alteration (dysgeusia) and skin rash?',
    options: [
      { key: 'A', text: 'Enalapril' },
      { key: 'B', text: 'Captopril' },
      { key: 'C', text: 'Lisinopril' },
      { key: 'D', text: 'Ramipril' }
    ],
    correctKey: 'B',
    explanation: 'Captopril is an active drug containing a free sulfhydryl (-SH) group that binds directly to the active zinc ion of ACE. The free thiol group is linked to dysgeusia, rash, and neutropenia.',
    clinicalKeyPoint: 'Enalapril and Ramipril are dicarboxylate prodrugs developed to eliminate the thiol-associated adverse reactions.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Cardiovascular Drugs.'
  },

  // =========================================================================
  // 3. PHARMACOGNOSY (ER20-13T)
  // =========================================================================
  {
    id: 'DP-COG-001',
    subject: 'Pharmacognosy',
    topic: 'Qualitative Alkaloid Chemical Reagents',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which alkaloidal precipitating reagent chemically consists of Potassium Mercuric Iodide solution and produces a characteristic cream-colored precipitate when reacted with crude alkaloid extracts?',
    options: [
      { key: 'A', text: 'Mayer\'s reagent' },
      { key: 'B', text: 'Wagner\'s reagent' },
      { key: 'C', text: 'Dragendorff\'s reagent' },
      { key: 'D', text: 'Hager\'s reagent' }
    ],
    correctKey: 'A',
    explanation: 'Mayer\'s reagent is potassium mercuric iodide, yielding a creamy precipitate. Wagner\'s is iodine in KI (red-brown), Dragendorff\'s is potassium bismuth iodide (red-brown/orange), and Hager\'s is saturated picric acid (yellow).',
    clinicalKeyPoint: 'Alkaloid salt solutions must be slightly acidified with dilute HCl for these precipitating reactions to occur.',
    pciReference: 'PCI ER-2020 Pharmacognosy (ER20-13T): Alkaloid Evaluation.'
  },
  {
    id: 'DP-COG-002',
    subject: 'Pharmacognosy',
    topic: 'Specific Chemical Identity Reactions',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'A powdered crude drug sample yields an emerald green color upon treatment with bromine water followed by dilute ammonia solution. Which specific alkaloid and parent crude drug does this Thalleioquin test confirm?',
    options: [
      { key: 'A', text: 'Morphine in Papaver somniferum' },
      { key: 'B', text: 'Quinine in Cinchona calisaya bark' },
      { key: 'C', text: 'Atropine in Atropa belladonna' },
      { key: 'D', text: 'Reserpine in Rauwolfia serpentina' }
    ],
    correctKey: 'B',
    explanation: 'The Thalleioquin reaction is diagnostic for quinoline alkaloids containing a 6-methoxy group (such as Quinine and Quinidine from Cinchona bark). Bromine water and ammonia oxidize the drug to form emerald green thalleioquin.',
    clinicalKeyPoint: 'Vitali-Morin test identifies tropane alkaloids (violet), while Marquis test identifies morphine (purple-violet).',
    pciReference: 'PCI ER-2020 Pharmacognosy: Chemical Identification Tests.'
  },
  {
    id: 'DP-COG-003',
    subject: 'Pharmacognosy',
    topic: 'Cardiac Glycosides & Keller-Kiliani Reaction',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Digitalis purpurea leaves contain cardiac glycosides like digitoxin. Which specific chemical test identifies the presence of deoxysugars (digitoxose), producing a reddish-brown junction ring and a bluish-green upper layer?',
    options: [
      { key: 'A', text: 'Borntrager\'s test' },
      { key: 'B', text: 'Keller-Kiliani test' },
      { key: 'C', text: 'Shinoda test' },
      { key: 'D', text: 'Van-Urk\'s test' }
    ],
    correctKey: 'B',
    explanation: 'Keller-Kiliani test: Glacial acetic acid with trace FeCl3 layered over concentrated H2SO4 extracts digitoxose deoxysugars, yielding a brown ring at the interface and a blue-green acetic acid layer.',
    clinicalKeyPoint: 'Borntrager test identifies anthraquinone laxatives (Senna, Aloe), whereas Shinoda test detects flavonoids.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Cardiac Glycosides.'
  },
  {
    id: 'DP-COG-004',
    subject: 'Pharmacognosy',
    topic: 'Traditional Systems of Medicine (Ayurveda)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Under Ayurvedic pharmacognosy principles, the human body is governed by seven foundational tissues known as Saptadhatu. Which of the following correctly pairs the classical term "Majja" with its modern physiological tissue?',
    options: [
      { key: 'A', text: 'Rasa = Circulating blood' },
      { key: 'B', text: 'Majja = Bone marrow and nervous tissue' },
      { key: 'C', text: 'Meda = Muscle flesh' },
      { key: 'D', text: 'Asthi = Reproductive fluids' }
    ],
    correctKey: 'B',
    explanation: 'Saptadhatu: 1. Rasa (lymph/plasma), 2. Rakta (blood), 3. Mamsa (muscle), 4. Meda (adipose tissue), 5. Asthi (bone), 6. Majja (bone marrow/nerve), 7. Shukra (reproductive fluids).',
    clinicalKeyPoint: 'Panchamahabhutas form the Tridosha: Vata (Space/Air), Pitta (Fire/Water), Kapha (Water/Earth).',
    pciReference: 'PCI ER-2020 Pharmacognosy: Traditional Systems of Medicine.'
  },
  {
    id: 'DP-COG-005',
    subject: 'Pharmacognosy',
    topic: 'Surgical Dressings & Sutures',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Surgical absorbable catgut sutures are commercially derived from which anatomical layer and animal source, and how are they gradually absorbed by human tissues?',
    options: [
      { key: 'A', text: 'Fibroin protein from Bombyx mori silkworm; absorbed by oxidation' },
      { key: 'B', text: 'Submucosal connective tissue of sheep (Ovis aries) intestine; absorbed by proteolytic enzymes' },
      { key: 'C', text: 'Seed hair cellulose of Gossypium herbaceum; absorbed by macrophages' },
      { key: 'D', text: 'Synthetic polyamide monofilament; absorbed by tissue hydrolysis' }
    ],
    correctKey: 'B',
    explanation: 'Catgut is made from the submucosal layer of healthy sheep or bovine intestine. It consists of mammalian collagen and is degraded in tissues by proteolytic enzymes.',
    clinicalKeyPoint: 'Treatment with chromium salts (Chromic Catgut) extends its absorption profile from 10 days to over 20–40 days.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Plant & Animal Fibres in Surgery.'
  },

  // =========================================================================
  // 4. HUMAN ANATOMY & PHYSIOLOGY (ER20-14T)
  // =========================================================================
  {
    id: 'DP-HAP-001',
    subject: 'Human Anatomy',
    topic: 'Cardiovascular System (Cardiac Output Calculation)',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A healthy adult patient at rest exhibits a resting heart rate of 72 beats per minute and a left ventricular stroke volume of 70 mL per beat. According to the formula [Cardiac Output = Heart Rate × Stroke Volume], what is the calculated total systemic blood flow per minute?',
    options: [
      { key: 'A', text: '3.50 Liters/min' },
      { key: 'B', text: '5.04 Liters/min' },
      { key: 'C', text: '7.20 Liters/min' },
      { key: 'D', text: '2.85 Liters/min' }
    ],
    correctKey: 'B',
    explanation: 'CO = HR × SV = 72 beats/min × 70 mL/beat = 5,040 mL/min ≈ 5.04 Liters per minute.',
    clinicalKeyPoint: 'The normal adult cardiac cycle duration is 0.8 seconds (Atrial systole: 0.1s; Ventricular systole: 0.3s; Complete diastole: 0.4s).',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology (ER20-14T): Cardiovascular System.'
  },
  {
    id: 'DP-HAP-002',
    subject: 'Human Anatomy',
    topic: 'Hematology & Blood Clotting Cascade',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'In the physiological blood coagulation cascade, what is the official biochemical name of Factor VIII, and what genetic bleeding diathesis results from its congenital deficiency?',
    options: [
      { key: 'A', text: 'Factor IX (Christmas Factor); Hemophilia B' },
      { key: 'B', text: 'Factor VIII (Antihemophilic Factor A); Hemophilia A' },
      { key: 'C', text: 'Factor I (Fibrinogen); Afibrinogenemia' },
      { key: 'D', text: 'Factor X (Stuart-Prower Factor); Thrombocytopenia' }
    ],
    correctKey: 'B',
    explanation: 'Clotting factor mnemonic ("Fresher\'s Party Tonight Come Lets Sing And Call Seniors"): Factor VIII is Antihemophilic factor A. Its congenital X-linked deficiency causes Hemophilia A.',
    clinicalKeyPoint: 'Factor IX deficiency causes Hemophilia B (Christmas disease); Factor IV is Calcium (Ca2+).',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Blood and Coagulation.'
  },
  {
    id: 'DP-HAP-003',
    subject: 'Human Anatomy',
    topic: 'Renal Nephron Physiology',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In which functional segment of the human nephron does approximately 65% to 70% of filtered water, sodium, and chloride—along with 100% of filtered glucose and amino acids—get reabsorbed?',
    options: [
      { key: 'A', text: 'Loop of Henle (Thick ascending limb)' },
      { key: 'B', text: 'Proximal Convoluted Tubule (PCT)' },
      { key: 'C', text: 'Distal Convoluted Tubule (DCT)' },
      { key: 'D', text: 'Medullary Collecting Duct' }
    ],
    correctKey: 'B',
    explanation: 'The Proximal Convoluted Tubule (PCT) has extensive brush border microvilli and reabsorbs ~67% of filtered electrolytes and water, and 100% of filtered glucose and amino acids.',
    clinicalKeyPoint: 'SGLT-2 inhibitors like Dapagliflozin act specifically at the early S1 segment of the PCT to block glucose reabsorption.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Urinary System.'
  },
  {
    id: 'DP-HAP-004',
    subject: 'Human Anatomy',
    topic: 'Endocrine Gland Regulation',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'Which endocrine organ synthesizes and secretes Oxytocin and Antidiuretic Hormone (ADH/Vasopressin), which are subsequently transported axonal-wise and stored in the posterior pituitary gland for release?',
    options: [
      { key: 'A', text: 'Anterior Pituitary (Adenohypophysis)' },
      { key: 'B', text: 'Hypothalamus' },
      { key: 'C', text: 'Pineal Gland' },
      { key: 'D', text: 'Adrenal Cortex' }
    ],
    correctKey: 'B',
    explanation: 'ADH and Oxytocin are synthesized in the paraventricular and supraoptic nuclei of the hypothalamus and transported along the hypothalamo-hypophyseal tract to the posterior pituitary (neurohypophysis) for storage and release.',
    clinicalKeyPoint: 'Deficiency of hypothalamic ADH secretion results in central Diabetes Insipidus.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Endocrine System.'
  },

  // =========================================================================
  // 5. SOCIAL PHARMACY (ER20-15T)
  // =========================================================================
  {
    id: 'DP-SOC-001',
    subject: 'Social Pharmacy',
    topic: 'Preventive Healthcare Tiers',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Routine national childhood immunization schedules and the distribution of insecticide-treated mosquito bed nets fall under which foundational tier of disease prevention?',
    options: [
      { key: 'A', text: 'Primordial prevention (altering broad environmental social conditions)' },
      { key: 'B', text: 'Primary prevention (actions taken prior to the onset of disease)' },
      { key: 'C', text: 'Secondary prevention (early detection via screening and prompt cure)' },
      { key: 'D', text: 'Tertiary prevention (disability limitation and physical rehabilitation)' }
    ],
    correctKey: 'B',
    explanation: 'Primary prevention eliminates disease risk before pathogenesis begins (e.g., vaccination, safe water, health education). Secondary involves early screening (mammograms, Pap smears), and tertiary manages chronic sequelae.',
    clinicalKeyPoint: 'Community pharmacists promote primary prevention through cold-chain vaccine maintenance and counseling.',
    pciReference: 'PCI ER-2020 Social Pharmacy (ER20-15T): Preventive Care.'
  },
  {
    id: 'DP-SOC-002',
    subject: 'Social Pharmacy',
    topic: 'Immunization Schedules & Vaccine Types',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which of the following child immunization vaccines is classified as an inactivated (killed) vaccine rather than a live attenuated viral vaccine?',
    options: [
      { key: 'A', text: 'Bacillus Calmette-Guérin (BCG)' },
      { key: 'B', text: 'Measles, Mumps, Rubella (MMR)' },
      { key: 'C', text: 'Injectable Salk Polio Vaccine (IPV)' },
      { key: 'D', text: 'Oral Sabin Polio Vaccine (OPV)' }
    ],
    correctKey: 'C',
    explanation: 'Injectable Polio Vaccine (Salk) is an inactivated (killed) virus vaccine. BCG, MMR, and Oral Polio Vaccine (Sabin) are live attenuated formulations.',
    clinicalKeyPoint: 'Live vaccines are contraindicated in severe immunosuppression and pregnancy.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Immunization Programs.'
  },
  {
    id: 'DP-SOC-003',
    subject: 'Social Pharmacy',
    topic: 'Pharmacoeconomic Evaluation Frameworks',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'A health technology assessment evaluates two competing anti-cancer therapies where clinical outcomes are measured in terms of Quality-Adjusted Life Years (QALYs) gained. What specific pharmacoeconomic analysis method is this?',
    options: [
      { key: 'A', text: 'Cost-Minimization Analysis (CMA)' },
      { key: 'B', text: 'Cost-Effectiveness Analysis (CEA)' },
      { key: 'C', text: 'Cost-Utility Analysis (CUA)' },
      { key: 'D', text: 'Cost-Benefit Analysis (CBA)' }
    ],
    correctKey: 'C',
    explanation: 'Cost-Utility Analysis (CUA) measures outcomes using multi-attribute health utility metrics, specifically Quality-Adjusted Life Years (QALYs) or Disability-Adjusted Life Years (DALYs).',
    clinicalKeyPoint: 'CBA measures both costs and outcomes in currency units; CEA measures natural clinical units (e.g., mmHg reduction, life-years saved).',
    pciReference: 'PCI ER-2020 Social Pharmacy: Pharmacoeconomics.'
  },
  {
    id: 'DP-SOC-004',
    subject: 'Social Pharmacy',
    topic: 'Nutritional Deficiencies',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Severe dietary deficiency of Niacin (Vitamin B3) leads to which classic clinical condition characterized by the triad of dermatitis, diarrhea, and dementia (the 3 Ds)?',
    options: [
      { key: 'A', text: 'Beri-Beri' },
      { key: 'B', text: 'Scurvy' },
      { key: 'C', text: 'Pellagra' },
      { key: 'D', text: 'Rickets' }
    ],
    correctKey: 'C',
    explanation: 'Pellagra is caused by niacin (B3) or tryptophan deficiency, presenting with symmetric photosensitive dermatitis, diarrhea, dementia, and death if untreated.',
    clinicalKeyPoint: 'Beri-Beri is caused by thiamine (B1) deficiency; Scurvy by vitamin C deficiency.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Nutrition and Public Health.'
  },

  // =========================================================================
  // 6. PHARMACOLOGY (ER20-21T)
  // =========================================================================
  {
    id: 'DP-PCOL-001',
    subject: 'Pharmacology',
    topic: 'Toxicology & Specific Antidotes',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'A patient arrives in the emergency department 4 hours after consuming 20 tablets of 650 mg Paracetamol in an intentional overdose. What specific antidote must be administered immediately, and what is its biochemical mechanism?',
    options: [
      { key: 'A', text: 'Naloxone; competitive blockade of mu-opioid central receptors' },
      { key: 'B', text: 'N-Acetylcysteine (NAC); replenishes hepatic glutathione reserves to neutralize toxic NAPQI' },
      { key: 'C', text: 'Flumazenil; competitive antagonism at benzodiazepine GABA-A binding sites' },
      { key: 'D', text: 'Protamine sulfate; polycationic ionic neutralization' }
    ],
    correctKey: 'B',
    explanation: 'Paracetamol overdose saturates glucuronidation/sulfation pathways, shunting metabolism to CYP2E1 which yields excess N-acetyl-p-benzoquinone imine (NAPQI). N-Acetylcysteine restores hepatic glutathione to conjugate NAPQI into non-toxic mercapturic acid.',
    clinicalKeyPoint: 'NAC is most effective when administered within 8 to 10 hours post-ingestion (Rumack-Matthew nomogram).',
    pciReference: 'PCI ER-2020 Pharmacology (ER20-21T): General Toxicology & Antidotes.'
  },
  {
    id: 'DP-PCOL-002',
    subject: 'Pharmacology',
    topic: 'Opioid Pharmacology (Morphine Actions)',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Medium',
    question: 'According to the classical mnemonic "MARPHINE CVS" for the pharmacological actions of Morphine, which of the following represents an excitatory, non-tolerant ocular sign of acute opioid toxicity?',
    options: [
      { key: 'A', text: 'Passive mydriasis due to sympathetic chain excitation' },
      { key: 'B', text: 'Pin-point pupil (miosis) caused by stimulation of the Edinger-Westphal nucleus' },
      { key: 'C', text: 'Elevated intraocular pressure due to trabecular outflow blockage' },
      { key: 'D', text: 'Loss of corneal reflex' }
    ],
    correctKey: 'B',
    explanation: 'Morphine stimulates the parasympathetic preganglionic Edinger-Westphal nucleus of the oculomotor nerve (CN III), causing pupillary constriction (miosis). Tolerance does not develop to miosis or constipation.',
    clinicalKeyPoint: 'The clinical triad of acute opioid toxicity comprises: Coma, Pinpoint pupils, and Respiratory depression (<6 breaths/min).',
    pciReference: 'PCI ER-2020 Pharmacology: Central Nervous System (Opioids).'
  },
  {
    id: 'DP-PCOL-003',
    subject: 'Pharmacology',
    topic: 'Antiepileptic Drug Mechanisms',
    bloomTaxonomy: 'Understand',
    difficulty: 'Hard',
    question: 'Ethosuximide is the first-line drug of choice for absence (petit mal) seizures. Which ionic mechanism responsible for thalamocortical 3-Hz spike-and-wave discharge does it selectively inhibit?',
    options: [
      { key: 'A', text: 'Voltage-gated sodium channel prolonged inactivation' },
      { key: 'B', text: 'Low-threshold T-type calcium channels in thalamic neurons' },
      { key: 'C', text: 'GABA transaminase (GABA-T) enzymatic degradation' },
      { key: 'D', text: 'GAT-1 neuronal reuptake transporter' }
    ],
    correctKey: 'B',
    explanation: 'Ethosuximide selectively blocks low-threshold T-type Ca2+ currents in thalamic relay neurons, suppressing the rhythmic pacemaker currents that generate absence seizures.',
    clinicalKeyPoint: 'Valproate also blocks T-type Ca2+ channels and treats absence seizures, while Phenytoin and Carbamazepine can worsen them.',
    pciReference: 'PCI ER-2020 Pharmacology: Anticonvulsant Drugs.'
  },
  {
    id: 'DP-PCOL-004',
    subject: 'Pharmacology',
    topic: 'Emergency Pharmacology & Anaphylaxis',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'A 28-year-old patient develops sudden stridor, bronchospasm, urticaria, and severe hypotension immediately following an intravenous cephalosporin injection. What is the drug, dose, and route of choice?',
    options: [
      { key: 'A', text: 'Hydrocortisone 100 mg slow oral suspension' },
      { key: 'B', text: 'Adrenaline (Epinephrine) 1:1,000 (0.5 mg) via Intramuscular (IM) injection in the anterolateral thigh' },
      { key: 'C', text: 'Chlorpheniramine maleate 25 mg subcutaneous injection' },
      { key: 'D', text: 'Salbutamol inhalation nebules 5 mg as sole rescue agent' }
    ],
    correctKey: 'B',
    explanation: 'Adrenaline 1:1,000 (0.5 mg IM) is the first-line treatment for anaphylaxis. Alpha-1 vasoconstriction reverses shock and laryngeal edema, while beta-2 activation relieves bronchospasm.',
    clinicalKeyPoint: 'Antihistamines and corticosteroids are secondary adjuncts and do not reverse immediate airway collapse.',
    pciReference: 'PCI ER-2020 Pharmacology: Autonomic & Emergency Drugs.'
  },
  {
    id: 'DP-PCOL-005',
    subject: 'Pharmacology',
    topic: 'Cardioactive Glycosides & Digoxin Toxicity',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'Digoxin exerts positive inotropy by binding to and inhibiting myocardial sarcolemmal Na+/K+-ATPase. Which concurrent electrolyte disturbance significantly potentiates digoxin toxicity and can trigger ventricular arrhythmias?',
    options: [
      { key: 'A', text: 'Hyperkalemia' },
      { key: 'B', text: 'Hypokalemia' },
      { key: 'C', text: 'Hyponatremia' },
      { key: 'D', text: 'Hypocalcemia' }
    ],
    correctKey: 'B',
    explanation: 'K+ and digoxin compete for the same extracellular phosphorylation site on Na+/K+-ATPase. Hypokalemia increases digoxin binding, marked digitalis toxicity, and arrhythmogenesis.',
    clinicalKeyPoint: 'Concomitant administration of loop diuretics (Furosemide) without potassium supplementation frequently precipitates digitalis toxicity.',
    pciReference: 'PCI ER-2020 Pharmacology: Congestive Heart Failure Drugs.'
  },
  {
    id: 'DP-PCOL-006',
    subject: 'Pharmacology',
    topic: 'Clinical Pharmacology & Trial Phases',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'In modern clinical pharmacology, what is Phase 0 clinical trial terminology officially designated as, and what is its dosing threshold in human subjects?',
    options: [
      { key: 'A', text: 'Micro-dosing study; administered at less than 1/100th of the therapeutic dose' },
      { key: 'B', text: 'First-in-human safety trial; administered at 100% estimated human equivalent dose' },
      { key: 'C', text: 'Therapeutic exploration; administered to 100–500 diseased volunteers' },
      { key: 'D', text: 'Post-marketing surveillance in 3,000+ patients' }
    ],
    correctKey: 'A',
    explanation: 'Phase 0 (microdosing) studies evaluate preliminary pharmacokinetic parameters in humans using sub-therapeutic doses (<1/100th of calculated active dose) in 10–15 subjects.',
    clinicalKeyPoint: 'Phase I tests safety/tolerability in 20–80 healthy volunteers; Phase II evaluates efficacy in 100–500 patients.',
    pciReference: 'PCI ER-2020 Pharmacology: Clinical Trials & Drug Development.'
  },

  // =========================================================================
  // 7. COMMUNITY PHARMACY & MANAGEMENT (ER20-22T)
  // =========================================================================
  {
    id: 'DP-COMM-001',
    subject: 'Community Pharmacy',
    topic: 'Inventory Rotation Systems',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Under Good Pharmacy Practice (GPP), which inventory rotation principle dictates that batches of pharmaceuticals with the nearest expiration date are arranged in front and dispensed first?',
    options: [
      { key: 'A', text: 'LIFO (Last-In, First-Out)' },
      { key: 'B', text: 'FIFO (First-In, First-Out)' },
      { key: 'C', text: 'FEFO (First-Expiry, First-Out)' },
      { key: 'D', text: 'VED (Vital, Essential, Desirable)' }
    ],
    correctKey: 'C',
    explanation: 'FEFO (First-Expiry, First-Out) ensures stock with earlier expiry dates is dispensed ahead of newer batches, minimizing drug obsolescence and expiration losses.',
    clinicalKeyPoint: 'FIFO tracks receiving order, but FEFO takes priority for dated medicines and biologicals.',
    pciReference: 'PCI ER-2020 Community Pharmacy (ER20-22T): Inventory Management.'
  },
  {
    id: 'DP-COMM-002',
    subject: 'Community Pharmacy',
    topic: 'Inventory Control Math (Reorder Levels)',
    bloomTaxonomy: 'Apply',
    difficulty: 'Hard',
    question: 'A community pharmacy dispenses a maximum of 40 bottles of pediatric paracetamol syrup daily during peak flu season, with a maximum supplier delivery lead time of 7 days. What is the calculated Reorder Level (ROL) for this item?',
    options: [
      { key: 'A', text: '160 bottles' },
      { key: 'B', text: '280 bottles' },
      { key: 'C', text: '350 bottles' },
      { key: 'D', text: '120 bottles' }
    ],
    correctKey: 'B',
    explanation: 'Reorder Level = Maximum Daily Consumption × Maximum Reorder Lead Time = 40 bottles/day × 7 days = 280 bottles.',
    clinicalKeyPoint: 'When current inventory drops to 280 bottles, a purchase order must be generated to prevent stockouts.',
    pciReference: 'PCI ER-2020 Community Pharmacy: Inventory Control & Math.'
  },
  {
    id: 'DP-COMM-003',
    subject: 'Community Pharmacy',
    topic: 'Cold Chain Storage Standards',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'What is the mandatory storage temperature range defined for pharmaceutical cold-chain refrigerators housing biologicals, vaccines (e.g., Tetanus Toxoid, Hepatitis B), and regular insulin vials?',
    options: [
      { key: 'A', text: '-20°C to -10°C' },
      { key: 'B', text: '+2°C to +8°C' },
      { key: 'C', text: '+15°C to +25°C' },
      { key: 'D', text: '0°C to +1°C with ice packs touching the vials' }
    ],
    correctKey: 'B',
    explanation: 'The official cold chain maintenance range is +2°C to +8°C. Sub-zero temperatures denature protein antigens in aluminum-adsorbed vaccines (DPT, TT).',
    clinicalKeyPoint: 'Store biologicals on middle shelves; never store vaccines in the door compartments where temperature fluctuates.',
    pciReference: 'PCI ER-2020 Community Pharmacy: Cold Chain Management.'
  },
  {
    id: 'DP-COMM-004',
    subject: 'Community Pharmacy',
    topic: 'Patient Counselling (Teach-Back Technique)',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'During patient discharge counseling on a pressurised metered-dose inhaler (pMDI), the community pharmacist asks the patient to demonstrate the inhaler technique and explain the schedule. What counseling technique is this?',
    options: [
      { key: 'A', text: 'Didactic instruction model' },
      { key: 'B', text: 'The "Teach-Back" communication technique' },
      { key: 'C', text: 'Passive counseling strategy' },
      { key: 'D', text: 'Regulatory adherence interrogation' }
    ],
    correctKey: 'B',
    explanation: 'The Teach-Back method asks patients to state or demonstrate their regimen instructions in their own words, confirming understanding and uncovering technique errors.',
    clinicalKeyPoint: 'Teach-Back significantly reduces medication misuse and device-related administration failures.',
    pciReference: 'PCI ER-2020 Community Pharmacy: Patient Counseling.'
  },

  // =========================================================================
  // 8. BIOCHEMISTRY & CLINICAL PATHOLOGY (ER20-23T)
  // =========================================================================
  {
    id: 'DP-BIO-001',
    subject: 'Biochemistry',
    topic: 'Nutritional Amino Acid Classification',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'According to the nutritional classification mnemonic "VIP HALL for MTT", which of the following is an Essential Amino Acid that cannot be synthesized de novo by the human body?',
    options: [
      { key: 'A', text: 'Alanine' },
      { key: 'B', text: 'Lysine' },
      { key: 'C', text: 'Serine' },
      { key: 'D', text: 'Aspartate' }
    ],
    correctKey: 'B',
    explanation: 'Essential amino acids (VIP HALL for MTT): Valine, Isoleucine, Phenylalanine, Histidine, Arginine, Leucine, Lysine, Methionine, Threonine, Tryptophan. Alanine, Serine, and Aspartate are non-essential.',
    clinicalKeyPoint: 'Leucine and Lysine are purely ketogenic amino acids; their degradation yields acetyl-CoA or acetoacetate.',
    pciReference: 'PCI ER-2020 Biochemistry (ER20-23T): Amino Acid Metabolism.'
  },
  {
    id: 'DP-BIO-002',
    subject: 'Biochemistry',
    topic: 'Qualitative Protein Reactions',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which biochemical color reaction utilizes a diazotized sulfanilic acid reagent to produce a brilliant red color specifically in the presence of the imidazole ring of Histidine?',
    options: [
      { key: 'A', text: 'Millon\'s Test (Phenolic group / Tyrosine)' },
      { key: 'B', text: 'Pauly\'s Test' },
      { key: 'C', text: 'Sakaguchi Test (Guanidino group / Arginine)' },
      { key: 'D', text: 'Biuret Test (Peptide linkage)' }
    ],
    correctKey: 'B',
    explanation: 'Pauly\'s test is specific for the imidazole ring (Histidine) and phenolic groups (Tyrosine) using diazotized sulfanilic acid in alkaline conditions to produce a red azo dye.',
    clinicalKeyPoint: 'Sakaguchi test uses alpha-naphthol and sodium hypochlorite for arginine; Millon\'s test detects tyrosine.',
    pciReference: 'PCI ER-2020 Biochemistry: Qualitative Protein Tests.'
  },
  {
    id: 'DP-BIO-003',
    subject: 'Biochemistry',
    topic: 'Nucleic Acid Structure (DNA Geometry)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Hard',
    question: 'According to the Watson-Crick double-helical B-DNA structural model, what are the precise pitch length per turn and the number of nucleotide base pairs present in a single complete rotation?',
    options: [
      { key: 'A', text: 'Pitch = 20 Å (2.0 nm); 5 base pairs per turn' },
      { key: 'B', text: 'Pitch = 34 Å (3.4 nm); 10 base pairs per turn' },
      { key: 'C', text: 'Pitch = 45 Å (4.5 nm); 12 base pairs per turn' },
      { key: 'D', text: 'Pitch = 3.4 Å (0.34 nm); 1 base pair per turn' }
    ],
    correctKey: 'B',
    explanation: 'B-DNA features a double helix with a diameter of 20 Å (2 nm), a pitch of 34 Å (3.4 nm) containing 10 base pairs per turn, and 3.4 Å between adjacent pairs.',
    clinicalKeyPoint: 'Base pairing adheres to Chargaff\'s rule: A pairs with T via 2 hydrogen bonds; G pairs with C via 3 hydrogen bonds.',
    pciReference: 'PCI ER-2020 Biochemistry: Nucleic Acids.'
  },
  {
    id: 'DP-BIO-004',
    subject: 'Biochemistry',
    topic: 'Vitamin Ring Chemistry',
    bloomTaxonomy: 'Remember',
    difficulty: 'Hard',
    question: 'Which heterocyclic ring systems compose the molecular chemical structure of Thiamine (Vitamin B1), whose deficiency precipitates wet or dry Beri-Beri?',
    options: [
      { key: 'A', text: 'Isoalloxazine ring' },
      { key: 'B', text: 'Pyrimidine ring linked to a Thiazole ring' },
      { key: 'C', text: 'Chromane ring linked to an isoprenoid chain' },
      { key: 'D', text: 'Pteridine ring linked to PABA' }
    ],
    correctKey: 'B',
    explanation: 'Thiamine consists of a substituted pyrimidine ring linked via a methylene bridge to a substituted thiazole ring. Its active coenzyme form is Thiamine Pyrophosphate (TPP).',
    clinicalKeyPoint: 'Riboflavin (B2) contains the isoalloxazine ring; Vitamin E (Tocopherol) contains the chromane ring.',
    pciReference: 'PCI ER-2020 Biochemistry: Vitamins & Coenzymes.'
  },

  // =========================================================================
  // 9. PHARMACOTHERAPEUTICS (ER20-24T)
  // =========================================================================
  {
    id: 'DP-THER-001',
    subject: 'Pharmacotherapeutics',
    topic: 'Clinical Documentation (SOAP Notes)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'In clinical pharmacy case documentation, what does the standardized medical record acronym "SOAP" represent?',
    options: [
      { key: 'A', text: 'Sterilization, Operation, Asepsis, Parenterals' },
      { key: 'B', text: 'Subjective, Objective, Assessment, Plan' },
      { key: 'C', text: 'Standard, Observation, Antidote, Prescription' },
      { key: 'D', text: 'Symptoms, Optimization, Administration, Pharmacokinetics' }
    ],
    correctKey: 'B',
    explanation: 'SOAP format: S = Subjective (patient symptoms and history); O = Objective (vital signs, lab values); A = Assessment (clinical problem/diagnosis); P = Plan (interventions, monitoring).',
    clinicalKeyPoint: 'Writing concise SOAP notes is the standard for patient profile reviews and multidisciplinary clinical rounds.',
    pciReference: 'PCI ER-2020 Pharmacotherapeutics (ER20-24T): Clinical Documentation.'
  },
  {
    id: 'DP-THER-002',
    subject: 'Pharmacotherapeutics',
    topic: 'Antitubercular Chemotherapy Rationale',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Why does initial intensive phase therapy for active pulmonary tuberculosis mandate a 4-drug combination regimen (HRZE: Isoniazid, Rifampicin, Pyrazinamide, Ethambutol) rather than monotherapy?',
    options: [
      { key: 'A', text: 'To reduce the overall financial cost of medication' },
      { key: 'B', text: 'To provide synergistic bactericidal kill and prevent the emergence of multidrug-resistant mycobacteria' },
      { key: 'C', text: 'To permit lower drug doses so routine liver function monitoring is unnecessary' },
      { key: 'D', text: 'Because single agents lack intrinsic antimycobacterial activity' }
    ],
    correctKey: 'B',
    explanation: 'Mycobacterium tuberculosis undergoes spontaneous chromosomal mutation. Monotherapy rapidly selects for resistant bacilli. Combining 4 agents with distinct mechanisms prevents resistance emergence and eradicates both active and dormant bacilli.',
    clinicalKeyPoint: 'Ethambutol causes optic neuritis (decreased red-green discrimination); Isoniazid causes peripheral neuropathy (prevented with Pyridoxine/B6).',
    pciReference: 'PCI ER-2020 Pharmacotherapeutics: Infectious Diseases (Tuberculosis).'
  },
  {
    id: 'DP-THER-003',
    subject: 'Pharmacotherapeutics',
    topic: 'Respiratory Pharmacotherapy (Asthma vs COPD)',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A 24-year-old patient experiences an acute exacerbation of bronchial asthma with severe wheezing and dyspnea. What is the immediate first-line inhaled rescue agent of choice?',
    options: [
      { key: 'A', text: 'Inhaled Fluticasone propionate' },
      { key: 'B', text: 'Inhaled Salbutamol (Albuterol) short-acting beta-2 agonist' },
      { key: 'C', text: 'Oral Montelukast leukotriene receptor antagonist' },
      { key: 'D', text: 'Oral Theophylline sustained-release tablet' }
    ],
    correctKey: 'B',
    explanation: 'Short-acting beta-2 agonists (SABA) like Salbutamol relax bronchial smooth muscle within 3–5 minutes during an acute asthma attack.',
    clinicalKeyPoint: 'Inhaled corticosteroids (Fluticasone, Budesonide) are maintenance anti-inflammatory controllers and are ineffective as immediate bronchodilators.',
    pciReference: 'PCI ER-2020 Pharmacotherapeutics: Respiratory Disorders.'
  },

  // =========================================================================
  // 10. HOSPITAL AND CLINICAL PHARMACY (ER20-25T)
  // =========================================================================
  {
    id: 'DP-HOSP-001',
    subject: 'Hospital Pharmacy',
    topic: 'Medication Safety & Look-Alike Sound-Alike (LASA)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In hospital medication safety protocols, what labeling technique is recommended on bins and packaging to prevent dispensing errors between look-alike sound-alike drugs (e.g., vinBLASTine vs. vinCRIStine)?',
    options: [
      { key: 'A', text: 'Alphabetical co-shelving without outer cartons' },
      { key: 'B', text: 'Tall Man Lettering with distinct physical shelf segregation' },
      { key: 'C', text: 'Color-coded stickers applied over the expiry date' },
      { key: 'D', text: 'Handwritten Latin abbreviations' }
    ],
    correctKey: 'B',
    explanation: 'Tall Man lettering uses capitalized letters for differentiating syllables (e.g., DOPamine vs DOBUTamine), visually distinguishing look-alike medication names.',
    clinicalKeyPoint: 'High-alert medications require independent double-checks prior to hospital dispensing and administration.',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy (ER20-25T): Medication Safety.'
  },
  {
    id: 'DP-HOSP-002',
    subject: 'Hospital Pharmacy',
    topic: 'Hospital Committees & Formulary Management',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which multidisciplinary hospital committee is officially responsible for evaluating, selecting, and maintaining the Hospital Formulary list, and who typically serves as its Member Secretary?',
    options: [
      { key: 'A', text: 'Infection Control Committee; Head Nurse' },
      { key: 'B', text: 'Pharmacy and Therapeutics Committee (PTC); Hospital Chief Pharmacist' },
      { key: 'C', text: 'Institutional Animal Ethics Committee; Medical Superintendent' },
      { key: 'D', text: 'Hospital Grievance Redressal Board; Quality Manager' }
    ],
    correctKey: 'B',
    explanation: 'The Pharmacy and Therapeutics Committee (PTC) manages formulary drugs, ADR monitoring, and medication use policies. The hospital pharmacist serves as Member Secretary.',
    clinicalKeyPoint: 'The PTC evaluates drugs using evidence-based parameters: efficacy, safety, quality, and pharmacoeconomic cost-effectiveness.',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy: Hospital Committees.'
  },
  {
    id: 'DP-HOSP-003',
    subject: 'Hospital Pharmacy',
    topic: 'Radiopharmaceuticals & Nuclear Pharmacy',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Gamma radiation emitted by diagnostic radiopharmaceuticals (such as Technetium-99m and Iodine-131) possesses high tissue-penetrating capacity. What shielding material is mandatory for storage containers and handling areas?',
    options: [
      { key: 'A', text: 'Single thin sheets of craft paper' },
      { key: 'B', text: 'Clear acrylic plastic polymers' },
      { key: 'C', text: 'Lead-lined containers and high-density lead bricks' },
      { key: 'D', text: 'Pure aluminum foil layers' }
    ],
    correctKey: 'C',
    explanation: 'Alpha particles are stopped by paper; beta particles are attenuated by plastic/aluminum. High-frequency gamma and X-rays require high-density lead bricks or concrete shielding.',
    clinicalKeyPoint: 'Disposal of radioactive hospital waste is regulated under the Atomic Energy Regulatory Board (AERB) and BARC guidelines.',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy: Radiopharmaceuticals.'
  },
  {
    id: 'DP-HOSP-004',
    subject: 'Hospital Pharmacy',
    topic: 'Biomedical Waste Management (2016 Rules)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'According to the Biomedical Waste Management Rules 2016, human anatomical tissues, expired cytotoxic chemotherapy vials, and soiled cotton dressings must be segregated into which color-coded waste bin?',
    options: [
      { key: 'A', text: 'Red bin (contaminated recyclable plastics)' },
      { key: 'B', text: 'Yellow bin (incineration and deep burial)' },
      { key: 'C', text: 'Blue cardboard box (glassware and ampoules)' },
      { key: 'D', text: 'White translucent puncture-proof container (sharps/needles)' }
    ],
    correctKey: 'B',
    explanation: 'Yellow containers are dedicated to anatomical waste, pathological specimens, soiled dressings, expired cytotoxic drugs, and blood bags for incineration or plasma pyrolysis.',
    clinicalKeyPoint: 'Needles and scalpel blades go into white puncture-proof containers; recyclable tubing/catheters go into red bags.',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy: Biomedical Waste Management.'
  },

  // =========================================================================
  // 11. PHARMACY LAW AND ETHICS (ER20-26T)
  // =========================================================================
  {
    id: 'DP-LAW-001',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Drugs & Cosmetics Act, 1940 (Statutory Schedules)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Under the Drugs and Cosmetics Rules 1945, which schedule prescribes the requirements of premises, plant, and equipment for Good Manufacturing Practices (GMP) of pharmaceutical formulations?',
    options: [
      { key: 'A', text: 'Schedule H' },
      { key: 'B', text: 'Schedule M' },
      { key: 'C', text: 'Schedule X' },
      { key: 'D', text: 'Schedule P' }
    ],
    correctKey: 'B',
    explanation: 'Schedule M prescribes GMP standards for pharmaceutical factory premises, quality systems, and manufacturing equipment.',
    clinicalKeyPoint: 'Schedule M1 details GMP for homeopathic medicines; Schedule M2 covers cosmetics; Schedule M3 applies to medical devices.',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics (ER20-26T): Drugs & Cosmetics Act 1940.'
  },
  {
    id: 'DP-LAW-002',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Schedule X Psychotropics Regulations',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'Which legal requirement applies to drugs categorized under Schedule X of the Drugs and Cosmetics Rules (e.g., Ketamine, Amobarbital)?',
    options: [
      { key: 'A', text: 'They may be sold over-the-counter provided a logbook entry is completed' },
      { key: 'B', text: 'Retailers must maintain duplicate prescriptions and retain sales records for at least 2 years' },
      { key: 'C', text: 'They are exempt from displaying an "XRx" symbol on their packaging' },
      { key: 'D', text: 'Prescriptions may be refilled indefinitely without a fresh medical order' }
    ],
    correctKey: 'B',
    explanation: 'Schedule X psychotropics must be dispensed on duplicate prescriptions, with the pharmacist retaining one copy for 2 years. Outer packaging must display an "XRx" symbol in red.',
    clinicalKeyPoint: 'Schedule X inventory must be stored in a separate, double-locked steel cupboard within the pharmacy.',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Schedule X Regulations.'
  },
  {
    id: 'DP-LAW-003',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Pharmacy Act, 1948 Regulations',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'According to the Pharmacy Act 1948, what is the mandatory practical training duration required for D.Pharm students to register as a Pharmacist, and what is the annual renewal deadline?',
    options: [
      { key: 'A', text: '250 hours; 31st March every year' },
      { key: 'B', text: '500 hours over not less than 3 months; 31st December every year' },
      { key: 'C', text: '1,000 hours; 1st January every year' },
      { key: 'D', text: '100 hours; 15th August every year' }
    ],
    correctKey: 'B',
    explanation: 'The Pharmacy Act requires D.Pharm students to complete 500 hours of practical training over at least 3 months. Annual registration renewal fees must be paid before December 31st.',
    clinicalKeyPoint: 'The Central Register of Pharmacists is maintained by the Pharmacy Council of India (PCI).',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Pharmacy Act 1948.'
  },
  {
    id: 'DP-LAW-004',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Drugs and Magic Remedies Act, 1954',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'Under the Drugs and Magic Remedies (Objectionable Advertisements) Act 1954, which category of commercial claims is strictly prohibited in advertisements?',
    options: [
      { key: 'A', text: 'Claims for prevention or cure of conditions specified in the schedule (e.g., cancer, diabetes, epilepsy)' },
      { key: 'B', text: 'Price lists distributed by licensed wholesalers to retailers' },
      { key: 'C', text: 'Scientific research papers published in peer-reviewed journals' },
      { key: 'D', text: 'Manufacturer notifications regarding product batch recalls' }
    ],
    correctKey: 'A',
    explanation: 'The Act prohibits misleading advertisements claiming false cures or talismanic magic remedies for conditions specified in the schedule, including cancer, diabetes, and epilepsy.',
    clinicalKeyPoint: 'First conviction carries up to 6 months imprisonment; subsequent convictions carry up to 1 year.',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Magic Remedies Act 1954.'
  },
  {
    id: 'DP-LAW-005',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Narcotic Drugs & Psychotropic Substances (NDPS) Act, 1985',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Under the statutory definitions of the NDPS Act 1985, what plant part of Cannabis sativa is legally designated as "Ganja"?',
    options: [
      { key: 'A', text: 'The entire plant including the root system' },
      { key: 'B', text: 'The flowering or fruiting tops (excluding seeds and leaves when not accompanied by tops)' },
      { key: 'C', text: 'The dried separated resin (Charas / Hashish)' },
      { key: 'D', text: 'The mature dried seeds only' }
    ],
    correctKey: 'B',
    explanation: 'Ganja is legally defined as the flowering or fruiting tops of Cannabis sativa, excluding seeds and leaves when not accompanied by tops. Separated resin is classified as Charas.',
    clinicalKeyPoint: 'Administered at the central level by the Narcotics Control Bureau (NCB).',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: NDPS Act 1985.'
  },
  {
    id: 'DP-LAW-006',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Drug Price Control Order (DPCO) & NPPA',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'The National Pharmaceutical Pricing Authority (NPPA) derives its statutory authority to fix price ceilings on scheduled formulations from which parent Act of Parliament?',
    options: [
      { key: 'A', text: 'The Drugs and Cosmetics Act, 1940' },
      { key: 'B', text: 'The Essential Commodities Act, 1955' },
      { key: 'C', text: 'The Pharmacy Act, 1948' },
      { key: 'D', text: 'The Consumer Protection Act, 2019' }
    ],
    correctKey: 'B',
    explanation: 'The DPCO is issued by the Central Government under Section 3 of the Essential Commodities Act, 1955, authorizing the NPPA to establish price ceilings on essential drugs.',
    clinicalKeyPoint: 'MAPE (Maximum Allowable Post-manufacturing Expenses) in retail price calculations is capped at 100%.',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: DPCO & NPPA.'
  },
  {
    id: 'DP-LAW-007',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Legal Status of Drug Inspectors',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Under Section 21 of the Indian Penal Code (IPC) and the Drugs and Cosmetics Act 1940, every appointed Drug Inspector is legally deemed to be a:',
    options: [
      { key: 'A', text: 'Private commercial auditor' },
      { key: 'B', text: 'Public Servant' },
      { key: 'C', text: 'State Council Representative' },
      { key: 'D', text: 'Corporate Legal Counsel' }
    ],
    correctKey: 'B',
    explanation: 'Drug Inspectors appointed under Section 21 of the D&C Act 1940 are deemed Public Servants within the meaning of Section 21 of the IPC, protecting them during lawful inspections.',
    clinicalKeyPoint: 'Obstructing a Drug Inspector in discharge of official duty is a punishable penal offense.',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Government Regulatory Bodies.'
  }
];

export const PCI_SUBJECT_SUMMARY = [
  {
    name: 'Pharmaceutics',
    code: 'ER20-11T',
    icon: 'Pill',
    description: 'Unit operations, ball mill dynamics, size separation, IP sieve numbers, tablet coating defects & packaging science.',
    questionCount: 50,
    passRate: '86% Pass Rate'
  },
  {
    name: 'Pharmaceutical Chemistry',
    code: 'ER20-12T',
    icon: 'FlaskConical',
    description: 'Limit tests (Fe, As, Cl), volumetric/diazotization titrations, Hantzsch-Widman nomenclature & medicinal SAR.',
    questionCount: 45,
    passRate: '79% Pass Rate'
  },
  {
    name: 'Pharmacognosy',
    code: 'ER20-13T',
    icon: 'Leaf',
    description: 'Mayer/Wagner/Dragendorff reagents, Thalleioquin test, Keller-Kiliani reaction, Saptadhatu & surgical sutures.',
    questionCount: 42,
    passRate: '89% Pass Rate'
  },
  {
    name: 'Human Anatomy',
    code: 'ER20-14T',
    icon: 'Heart',
    description: 'Cardiac cycle, stroke volume math, blood coagulation cascade (Factors I-XIII), nephron reabsorption & endocrinology.',
    questionCount: 38,
    passRate: '88% Pass Rate'
  },
  {
    name: 'Social Pharmacy',
    code: 'ER20-15T',
    icon: 'Users',
    description: 'Tiers of prevention, vaccine types (Salk vs Sabin), pharmacoeconomics (QALYs, CUA) & deficiency syndromes.',
    questionCount: 35,
    passRate: '92% Pass Rate'
  },
  {
    name: 'Pharmacology',
    code: 'ER20-21T',
    icon: 'Activity',
    description: 'Paracetamol antidote, MARPHINE CVS mnemonic, absence seizure T-currents, adrenaline in anaphylaxis & Phase 0 trials.',
    questionCount: 55,
    passRate: '82% Pass Rate'
  },
  {
    name: 'Community Pharmacy',
    code: 'ER20-22T',
    icon: 'HeartPulse',
    description: 'FEFO stock rotation, Reorder Level calculation math, cold chain (+2°C to +8°C) & Teach-Back counseling.',
    questionCount: 40,
    passRate: '88% Pass Rate'
  },
  {
    name: 'Biochemistry',
    code: 'ER20-23T',
    icon: 'Atom',
    description: 'VIP HALL for MTT amino acid mnemonic, Pauly\'s test, Watson-Crick B-DNA geometry & vitamin ring structures.',
    questionCount: 38,
    passRate: '85% Pass Rate'
  },
  {
    name: 'Pharmacotherapeutics',
    code: 'ER20-24T',
    icon: 'Stethoscope',
    description: 'SOAP case documentation, HRZE rationale in tuberculosis & acute asthma rescue protocols.',
    questionCount: 40,
    passRate: '83% Pass Rate'
  },
  {
    name: 'Hospital Pharmacy',
    code: 'ER20-25T',
    icon: 'Building2',
    description: 'Tall Man lettering for LASA drugs, PTC formulary governance, gamma radiation lead shielding & BMW color bins.',
    questionCount: 36,
    passRate: '87% Pass Rate'
  },
  {
    name: 'Pharmacy Law & Ethics',
    code: 'ER20-26T',
    icon: 'Scale',
    description: 'Schedule M GMP parts, Schedule X duplicate rules, Pharmacy Act 500 hrs, NDPS Ganja definition & DPCO / NPPA.',
    questionCount: 48,
    passRate: '91% Pass Rate'
  }
];

export const INITIAL_TEAMS: Team[] = [
  {
    id: 'team-alpha',
    name: 'Team Galen (Pharma Titans)',
    college: 'D. P. Kharde Navjeevan College of Pharmacy',
    points: 12,
    correctAnswers: 12,
    wrongAnswers: 1,
    streak: 5,
    avatarBg: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'team-beta',
    name: 'Team Curare (Pharmacologists)',
    college: 'Apex Institute of Pharmaceutical Sciences',
    points: 10,
    correctAnswers: 10,
    wrongAnswers: 2,
    streak: 3,
    avatarBg: 'from-teal-600 to-emerald-700'
  },
  {
    id: 'team-gamma',
    name: 'Team Penicillin (Chem Innovators)',
    college: 'Metropolitan Pharmacy Academy',
    points: 9,
    correctAnswers: 9,
    wrongAnswers: 3,
    streak: 2,
    avatarBg: 'from-amber-600 to-orange-700'
  },
  {
    id: 'team-delta',
    name: 'Team Digitalis (Clinicians)',
    college: 'Central State Pharmacy College',
    points: 8,
    correctAnswers: 8,
    wrongAnswers: 4,
    streak: 1,
    avatarBg: 'from-rose-600 to-pink-700'
  }
];
