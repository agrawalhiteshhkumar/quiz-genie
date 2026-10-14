import { Question, Team } from '../types/quiz';

export const DPHARM_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. PHARMACEUTICS (Course Code: ER20-11T)
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
    explanation: 'The Department of Pharmaceutics at BHU was established in 1932 by Prof. M. L. Schroff, and the official 3-year B.Pharm degree began in 1937[cite: 154].',
    clinicalKeyPoint: 'March 6th is celebrated every year as National Pharmacy Education Day in honour of Prof. M. L. Schroff[cite: 154, 172].',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): History of Profession of Pharmacy[cite: 151, 154].'
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
    explanation: 'Type II glass is produced by treating commercial soda-lime glass surfaces with SO2 under moist heat, neutralizing surface alkali[cite: 11]. It is suitable for aqueous parenterals buffered below pH 7.0[cite: 11].',
    clinicalKeyPoint: 'Type I borosilicate glass remains mandatory for unbuffered parenterals, strong acids, and alkalis[cite: 11].',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Packaging Materials[cite: 8, 11, 151].'
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
    explanation: 'At optimal critical speed, the ball mill exhibits cataracting: balls are carried up nearly to the top and fall parabolically, maximizing impact force combined with attrition[cite: 157].',
    clinicalKeyPoint: 'Centrifuging occurs when speed is excessive, causing grinding balls to rotate with the shell without falling, halting size reduction[cite: 157].',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Unit Operations (Size Reduction)[cite: 8, 13, 151].'
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
    explanation: 'IP specifications: Coarse (10/44), Moderately Coarse (22/60), Moderately Fine (44/85), Fine (85/120), and Very Fine (all pass Sieve 120)[cite: 157].',
    clinicalKeyPoint: 'Sieve 22 has a nominal aperture size of 710 µm, while Sieve 60 corresponds to 250 µm[cite: 157].',
    pciReference: 'PCI ER-2020 Pharmaceutics: Size Separation[cite: 151, 157].'
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
    explanation: 'Bridging occurs when coating film pulls away from debossed contours due to excessive internal shrinkage stress or high solution viscosity[cite: 160]. Adding more plasticizer increases film elasticity[cite: 160].',
    clinicalKeyPoint: 'Orange peel is caused by rapid drying or incomplete atomization, while blistering arises from solvent entrapment under rapid surface drying[cite: 160].',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Solid Dosage Forms (Coating)[cite: 14, 151, 160].'
  },
  {
    id: 'DP-PHARM-006',
    subject: 'Pharmaceutics',
    topic: 'Packaging Materials Science',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which of the following represents a primary disadvantage of plastic pharmaceutical containers compared to type I glass containers?',
    options: [
      { key: 'A', text: 'Higher mechanical fragility during transport' },
      { key: 'B', text: 'Permeability to atmospheric gases, moisture vapor, and sorption of active ingredients' },
      { key: 'C', text: 'Significantly heavier tare weight' },
      { key: 'D', text: 'Inability to be molded into flexible unit-dose blow-fill-seal ampoules' }
    ],
    correctKey: 'B',
    explanation: 'Plastic containers are susceptible to gas/moisture permeation, ingredient leaching, and drug sorption onto polymer walls[cite: 11].',
    clinicalKeyPoint: 'Nitroglycerin and paraldehyde show significant sorption onto polyvinyl chloride (PVC) administration bags and tubing.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Packaging Materials[cite: 8, 11, 151].'
  },
  {
    id: 'DP-PHARM-007',
    subject: 'Pharmaceutics',
    topic: 'Collapsible Tubes Packaging',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which metal is historically and industrially preferred for fabricating collapsible ointment tubes due to its chemical ductility and non-reactive properties?',
    options: [
      { key: 'A', text: 'Pure Lead' },
      { key: 'B', text: 'Tin' },
      { key: 'C', text: 'Copper' },
      { key: 'D', text: 'Zinc' }
    ],
    correctKey: 'B',
    explanation: 'Tin tubes are chemically inert and ductile, making them preferred for ophthalmic ointments and pharmaceutical topicals[cite: 11].',
    clinicalKeyPoint: 'Aluminum tubes are also widely used, but require internal lacquer coatings when formulating acidic or alkaline semisolids.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Packaging Materials[cite: 8, 11, 151].'
  },
  {
    id: 'DP-PHARM-008',
    subject: 'Pharmaceutics',
    topic: 'Pharmaceutical Excipients (Antioxidants)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which of the following excipients functions specifically as an oil-soluble antioxidant in non-aqueous suspensions, ointments, and emulsion formulations?',
    options: [
      { key: 'A', text: 'Methyl paraben' },
      { key: 'B', text: 'Sodium benzoate' },
      { key: 'C', text: 'Butylated Hydroxytoluene (BHT)' },
      { key: 'D', text: 'Benzalkonium chloride' }
    ],
    correctKey: 'C',
    explanation: 'Butylated Hydroxytoluene (BHT) and Butylated Hydroxyanisole (BHA) are lipid-soluble free-radical scavenger antioxidants[cite: 12].',
    clinicalKeyPoint: 'Methylparaben and sodium benzoate serve as antimicrobial preservatives, not chemical antioxidants[cite: 12].',
    pciReference: 'PCI ER-2020 Pharmaceutics: Pharmaceutical Aids[cite: 8, 12, 151].'
  },
  {
    id: 'DP-PHARM-009',
    subject: 'Pharmaceutics',
    topic: 'Liquid Homogenization',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'What is the working mechanism of a Silverson mixer-homogenizer when producing fine emulsions and suspensions?',
    options: [
      { key: 'A', text: 'Gravitational settling' },
      { key: 'B', text: 'High hydraulic shear forces and intense turbulence' },
      { key: 'C', text: 'Ultrasonic cavitation exclusively' },
      { key: 'D', text: 'Compression between flat rollers' }
    ],
    correctKey: 'B',
    explanation: 'The Silverson homogenizer draws liquids into the central rotor-stator head, expelling them under hydraulic shear and turbulence at high velocity[cite: 14, 158].',
    clinicalKeyPoint: 'Silverson mixers reduce emulsion droplets down to 2–5 microns rapidly[cite: 158].',
    pciReference: 'PCI ER-2020 Pharmaceutics: Biphasic Dosage Forms[cite: 8, 14, 151, 158].'
  },
  {
    id: 'DP-PHARM-010',
    subject: 'Pharmaceutics',
    topic: 'Drying Technology (Lyophilization)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Freeze drying (Lyophilization) operates on the physical principle of:',
    options: [
      { key: 'A', text: 'Atmospheric convective boiling' },
      { key: 'B', text: 'Sublimation of ice directly into water vapor under high vacuum' },
      { key: 'C', text: 'Dielectric microwave heating' },
      { key: 'D', text: 'Infrared radiant moisture evaporation' }
    ],
    correctKey: 'B',
    explanation: 'Freeze drying freezes the sample below its eutectic point, then sublimates frozen ice directly into vapor below the triple point (4.58 mmHg)[cite: 14].',
    clinicalKeyPoint: 'Lyophilization is standard for thermolabile biologicals, peptide hormones, and intravenous antibiotic powders.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Drying Technologies[cite: 8, 14, 151].'
  },

  // =========================================================================
  // 2. PHARMACEUTICAL CHEMISTRY (Course Code: ER20-12T)
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
    explanation: 'Ammonia is added to render the solution alkaline so that ferrous thioglycollate develops its characteristic purple-red color[cite: 23]. Citric acid forms an iron complex that prevents ammonia from precipitating iron as insoluble ferric hydroxide[cite: 23].',
    clinicalKeyPoint: 'Visual color intensity is evaluated in Nessler cylinders against a standard iron solution (20 ppm limit).',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry (ER20-12T): Limit Tests[cite: 21, 23, 152].'
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
    explanation: 'Nascent hydrogen reduces arsenic into arsine gas (AsH3), which reacts with mercuric chloride paper to form a yellow-to-brown stain[cite: 23]. The lead acetate cotton plug traps interfering hydrogen sulfide gas (forming lead sulfide).',
    clinicalKeyPoint: 'Arsenic trioxide standard is prepared at a 10 ppm permissible limit.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Limit Tests[cite: 21, 23, 152].'
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
    explanation: 'In Hantzsch-Widman rules, nitrogen uses the prefix "aza", 5-membered rings use stem "ol", and fully saturated nitrogenous 5-rings take the suffix "-olidine"[cite: 180, 181]. Aza + ol + idine = Pyrrolidine[cite: 180, 181].',
    clinicalKeyPoint: 'Pyrrole is fully unsaturated (aromatic), while piperidine is a 6-membered saturated nitrogen ring[cite: 28, 180].',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Heterocyclic Systems[cite: 21, 28, 152, 180, 181].'
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
    explanation: 'Aromatic diazonium salts (Ar-N2+ Cl-) are unstable and decompose into phenols, releasing N2 gas at temperatures exceeding 5°C[cite: 179]. Low temperature stabilizes the diazonium intermediate[cite: 179].',
    clinicalKeyPoint: 'The end-point is detected externally using starch-iodide paper, which turns blue with excess nitrous acid[cite: 179].',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Volumetric Analysis[cite: 21, 24, 152, 179].'
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
    explanation: 'Al3+ ions relax gastrointestinal smooth muscle, delaying transit and causing constipation[cite: 26, 40]. Mg2+ ions retain water osmotically, inducing laxation[cite: 26]. Combining them produces a bowel-neutral therapeutic balance[cite: 40].',
    clinicalKeyPoint: 'Patients must avoid taking antacids within 2 hours of fluoroquinolones or tetracyclines due to polyvalent cation chelation[cite: 35].',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Gastrointestinal Agents[cite: 21, 26, 40, 152].'
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
    explanation: 'Captopril contains a free sulfhydryl (-SH) group that binds directly to the active zinc ion of ACE[cite: 32]. The free thiol group is linked to dysgeusia, rash, and neutropenia.',
    clinicalKeyPoint: 'Enalapril and Ramipril are dicarboxylate prodrugs developed to eliminate thiol-associated adverse reactions[cite: 32].',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Cardiovascular Drugs[cite: 21, 32, 152].'
  },
  {
    id: 'DP-CHEM-007',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Sedative-Hypnotics (Barbiturates)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Thiopental Sodium is characterized as an ultra-short-acting intravenous anesthetic. Structurally, it differs from Pentobarbital by the replacement of oxygen at C-2 with which atom?',
    options: [
      { key: 'A', text: 'Nitrogen' },
      { key: 'B', text: 'Sulfur' },
      { key: 'C', text: 'Chlorine' },
      { key: 'D', text: 'Fluorine' }
    ],
    correctKey: 'B',
    explanation: 'Thiopental is a thiobarbiturate in which sulfur replaces the oxygen atom at position C-2[cite: 29]. This increases lipid solubility, enabling rapid entry into the brain[cite: 29].',
    clinicalKeyPoint: 'Rapid termination of central anesthesia occurs through redistribution from the brain to skeletal muscle and adipose tissue.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: CNS Depressants[cite: 21, 29, 152].'
  },
  {
    id: 'DP-CHEM-008',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antidiabetic Drugs (Biguanides)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Metformin Hydrochloride is classified as an oral biguanide antihyperglycemic agent. What is its primary biochemical mechanism of action?',
    options: [
      { key: 'A', text: 'Stimulates pancreatic beta-cell insulin secretion by closing Katp channels' },
      { key: 'B', text: 'Inhibits hepatic gluconeogenesis via AMPK activation and enhances peripheral insulin sensitivity' },
      { key: 'C', text: 'Inhibits intestinal brush-border alpha-glucosidase enzymes' },
      { key: 'D', text: 'Inhibits renal SGLT-2 cotransporters in proximal tubules' }
    ],
    correctKey: 'B',
    explanation: 'Metformin activates AMP-activated protein kinase (AMPK), reducing hepatic gluconeogenesis and glycogenolysis while improving peripheral glucose uptake[cite: 33].',
    clinicalKeyPoint: 'Metformin does not stimulate insulin secretion and carries minimal risk of hypoglycemia when used as monotherapy[cite: 33].',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Oral Hypoglycemics[cite: 21, 33, 152].'
  },

  // =========================================================================
  // 3. PHARMACOGNOSY (Course Code: ER20-13T)
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
    explanation: 'Mayer\'s reagent is potassium mercuric iodide, yielding a creamy precipitate[cite: 173]. Wagner\'s is iodine in KI (red-brown), Dragendorff\'s is potassium bismuth iodide (red-brown/orange), and Hager\'s is saturated picric acid (yellow)[cite: 46, 173].',
    clinicalKeyPoint: 'Alkaloid salt solutions must be slightly acidified with dilute HCl for these precipitating reactions to occur.',
    pciReference: 'PCI ER-2020 Pharmacognosy (ER20-13T): Alkaloid Evaluation[cite: 41, 46, 151, 173].'
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
    explanation: 'The Thalleioquin reaction is diagnostic for quinoline alkaloids containing a 6-methoxy group (such as Quinine and Quinidine from Cinchona bark)[cite: 173]. Bromine water and ammonia oxidize the drug to form emerald green thalleioquin[cite: 173].',
    clinicalKeyPoint: 'Vitali-Morin test identifies tropane alkaloids (violet), while Marquis test identifies morphine (purple-violet)[cite: 173].',
    pciReference: 'PCI ER-2020 Pharmacognosy: Chemical Identification Tests[cite: 41, 151, 173].'
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
    explanation: 'Keller-Kiliani test: Glacial acetic acid with trace FeCl3 layered over concentrated H2SO4 extracts digitoxose deoxysugars, yielding a brown ring at the interface and a blue-green acetic acid layer[cite: 46].',
    clinicalKeyPoint: 'Borntrager test identifies anthraquinone laxatives (Senna, Aloe), whereas Shinoda test detects flavonoids[cite: 46].',
    pciReference: 'PCI ER-2020 Pharmacognosy: Cardiac Glycosides[cite: 41, 46, 151].'
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
    explanation: 'Saptadhatu: 1. Rasa (lymph/plasma), 2. Rakta (blood), 3. Mamsa (muscle), 4. Meda (adipose tissue), 5. Asthi (bone), 6. Majja (bone marrow/nerve), 7. Shukra (reproductive fluids)[cite: 174].',
    clinicalKeyPoint: 'Panchamahabhutas form the Tridosha: Vata (Space/Air), Pitta (Fire/Water), Kapha (Water/Earth)[cite: 50, 174].',
    pciReference: 'PCI ER-2020 Pharmacognosy: Traditional Systems of Medicine[cite: 41, 50, 151, 174].'
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
    explanation: 'Catgut is made from the submucosal layer of healthy sheep or bovine intestine[cite: 50, 174]. It consists of mammalian collagen and is degraded in tissues by proteolytic enzymes[cite: 50, 174].',
    clinicalKeyPoint: 'Treatment with chromium salts (Chromic Catgut) extends its absorption profile from 10 days to over 20–40 days.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Plant & Animal Fibres in Surgery[cite: 41, 50, 151, 174].'
  },
  {
    id: 'DP-COG-006',
    subject: 'Pharmacognosy',
    topic: 'Volatile Oils (Clove)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'What is the principal phenolic volatile oil constituent present in clove flower buds (Syzygium aromaticum), and what dental clinical use does it serve?',
    options: [
      { key: 'A', text: 'Anethole; carminative in infant colics' },
      { key: 'B', text: 'Eugenol; local anesthetic and antiseptic for dental toothache' },
      { key: 'C', text: 'Cineole; pulmonary mucolytic expectorant' },
      { key: 'D', text: 'Linalool; relaxing sedative' }
    ],
    correctKey: 'B',
    explanation: 'Clove contains 70% to 90% Eugenol, which acts as a local anesthetic, anti-inflammatory, and mild antiseptic in dental obtundent pastes[cite: 48].',
    clinicalKeyPoint: 'Zinc oxide-eugenol (ZOE) cement is standard in restorative dentistry as a temporary filling base.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Volatile Oils[cite: 41, 48, 151].'
  },

  // =========================================================================
  // 4. HUMAN ANATOMY AND PHYSIOLOGY (Course Code: ER20-14T)
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
    explanation: 'CO = HR × SV = 72 beats/min × 70 mL/beat = 5,040 mL/min ≈ 5.04 Liters per minute[cite: 61].',
    clinicalKeyPoint: 'The normal adult cardiac cycle duration is 0.8 seconds (Atrial systole: 0.1s; Ventricular systole: 0.3s; Complete diastole: 0.4s)[cite: 61].',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology (ER20-14T): Cardiovascular System[cite: 55, 61].'
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
    explanation: 'Clotting factor mnemonic ("Fresher\'s Party Tonight Come Lets Sing And Call Seniors"): Factor VIII is Antihemophilic factor A[cite: 60, 168]. Its congenital X-linked deficiency causes Hemophilia A[cite: 60].',
    clinicalKeyPoint: 'Factor IX deficiency causes Hemophilia B (Christmas disease); Factor IV is Calcium (Ca2+)[cite: 168].',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Blood and Coagulation[cite: 55, 60, 168].'
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
    explanation: 'The Proximal Convoluted Tubule (PCT) has extensive brush border microvilli and reabsorbs ~67% of filtered electrolytes and water, and 100% of filtered glucose and amino acids[cite: 33, 66].',
    clinicalKeyPoint: 'SGLT-2 inhibitors like Dapagliflozin act specifically at the early S1 segment of the PCT to block glucose reabsorption.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Urinary System[cite: 55, 66].'
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
    explanation: 'ADH and Oxytocin are synthesized in the paraventricular and supraoptic nuclei of the hypothalamus and transported along the hypothalamo-hypophyseal tract to the posterior pituitary (neurohypophysis) for storage and release[cite: 66, 169].',
    clinicalKeyPoint: 'Deficiency of hypothalamic ADH secretion results in central Diabetes Insipidus.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Endocrine System[cite: 55, 66, 169].'
  },

  // =========================================================================
  // 5. SOCIAL PHARMACY (Course Code: ER20-15T)
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
    explanation: 'Primary prevention eliminates disease risk before pathogenesis begins (e.g., vaccination, safe water, health education)[cite: 71]. Secondary involves early screening (mammograms, Pap smears), and tertiary manages chronic sequelae.',
    clinicalKeyPoint: 'Community pharmacists promote primary prevention through cold-chain vaccine maintenance and counseling.',
    pciReference: 'PCI ER-2020 Social Pharmacy (ER20-15T): Preventive Care[cite: 68, 71].'
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
    explanation: 'Injectable Polio Vaccine (Salk) is an inactivated (killed) virus vaccine[cite: 71]. BCG, MMR, and Oral Polio Vaccine (Sabin) are live attenuated formulations[cite: 71, 75].',
    clinicalKeyPoint: 'Live vaccines are contraindicated in severe immunosuppression and pregnancy.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Immunization Programs[cite: 68, 71, 75].'
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
    explanation: 'Cost-Utility Analysis (CUA) measures outcomes using multi-attribute health utility metrics, specifically Quality-Adjusted Life Years (QALYs) or Disability-Adjusted Life Years (DALYs)[cite: 78].',
    clinicalKeyPoint: 'CBA measures both costs and outcomes in currency units; CEA measures natural clinical units (e.g., mmHg reduction, life-years saved)[cite: 78, 79].',
    pciReference: 'PCI ER-2020 Social Pharmacy: Pharmacoeconomics[cite: 68, 78].'
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
    explanation: 'Pellagra is caused by niacin (B3) or tryptophan deficiency, presenting with symmetric photosensitive dermatitis, diarrhea, dementia, and death if untreated[cite: 74].',
    clinicalKeyPoint: 'Beri-Beri is caused by thiamine (B1) deficiency; Scurvy by vitamin C deficiency[cite: 74].',
    pciReference: 'PCI ER-2020 Social Pharmacy: Nutrition and Public Health[cite: 68, 74].'
  },

  // =========================================================================
  // 6. PHARMACOLOGY (Course Code: ER20-21T)
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
    explanation: 'Paracetamol overdose saturates glucuronidation/sulfation pathways, shunting metabolism to CYP2E1 which yields excess N-acetyl-p-benzoquinone imine (NAPQI)[cite: 34]. N-Acetylcysteine restores hepatic glutathione to conjugate NAPQI into non-toxic mercapturic acid.',
    clinicalKeyPoint: 'NAC is most effective when administered within 8 to 10 hours post-ingestion (Rumack-Matthew nomogram).',
    pciReference: 'PCI ER-2020 Pharmacology (ER20-21T): General Toxicology & Antidotes[cite: 34, 80, 151].'
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
    explanation: 'Morphine stimulates the parasympathetic preganglionic Edinger-Westphal nucleus of the oculomotor nerve (CN III), causing pupillary constriction (miosis)[cite: 166]. Tolerance does not develop to miosis or constipation.',
    clinicalKeyPoint: 'The clinical triad of acute opioid toxicity comprises: Coma, Pinpoint pupils, and Respiratory depression (<6 breaths/min)[cite: 87, 166].',
    pciReference: 'PCI ER-2020 Pharmacology: Central Nervous System (Opioids)[cite: 80, 87, 151, 166].'
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
    explanation: 'Ethosuximide selectively blocks low-threshold T-type Ca2+ currents in thalamic relay neurons, suppressing the rhythmic pacemaker currents that generate absence seizures[cite: 165].',
    clinicalKeyPoint: 'Valproate also blocks T-type Ca2+ channels and treats absence seizures, while Phenytoin and Carbamazepine can worsen them[cite: 165].',
    pciReference: 'PCI ER-2020 Pharmacology: Anticonvulsant Drugs[cite: 80, 86, 151, 165].'
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
    explanation: 'Adrenaline 1:1,000 (0.5 mg IM) is the first-line treatment for anaphylaxis. Alpha-1 vasoconstriction reverses shock and laryngeal edema, while beta-2 activation relieves bronchospasm[cite: 83].',
    clinicalKeyPoint: 'Antihistamines and corticosteroids are secondary adjuncts and do not reverse immediate airway collapse.',
    pciReference: 'PCI ER-2020 Pharmacology: Autonomic & Emergency Drugs[cite: 80, 83, 151].'
  },
  {
    id: 'DP-PCOL-005',
    subject: 'Pharmacology',
    topic: 'Autonomic Drugs (Anticholinergics)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Why is Atropine sulfate strictly contraindicated in patients suffering from narrow-angle glaucoma?',
    options: [
      { key: 'A', text: 'It produces excessive miosis and blocks corneal diffusion' },
      { key: 'B', text: 'It causes passive mydriasis and cycloplegia, crowding the iris against the trabecular meshwork and increasing intraocular pressure' },
      { key: 'C', text: 'It permanently inhibits lacrimal tear secretion' },
      { key: 'D', text: 'It induces systemic hypotension leading to optic nerve ischemia' }
    ],
    correctKey: 'B',
    explanation: 'Atropine blocks M3 receptors in the circular pupillary sphincter muscle, producing mydriasis and relaxation of the ciliary muscle (cycloplegia)[cite: 164]. In narrow-angle glaucoma, this obstructs the canal of Schlemm, elevating intraocular tension[cite: 164].',
    clinicalKeyPoint: 'Pilocarpine (a direct-acting miotic) is used instead in glaucoma to open trabecular spaces and promote aqueous outflow[cite: 83, 85].',
    pciReference: 'PCI ER-2020 Pharmacology (ER20-21T): Drugs Acting on Autonomic Nervous System & Eye[cite: 80, 83, 85, 151, 164].'
  },
  {
    id: 'DP-PCOL-006',
    subject: 'Pharmacology',
    topic: 'Cardiovascular Pharmacology (Antiplatelets)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Low-dose Aspirin (75–150 mg daily) prevents arterial thrombosis primarily through which biochemical mechanism?',
    options: [
      { key: 'A', text: 'Reversible competitive inhibition of cyclooxygenase-2 (COX-2)' },
      { key: 'B', text: 'Irreversible acetylation of platelet COX-1, permanently inhibiting Thromboxane A2 (TXA2) synthesis' },
      { key: 'C', text: 'Direct antagonism of platelet P2Y12 ADP receptors' },
      { key: 'D', text: 'Blockade of Glycoprotein IIb/IIIa fibrinogen receptors' }
    ],
    correctKey: 'B',
    explanation: 'Platelets lack nuclei and cannot synthesize new proteins. Low-dose aspirin irreversibly acetylates serine-529 on platelet COX-1, abolishing Thromboxane A2 generation for the entire 7–10 day lifespan of the platelet[cite: 168].',
    clinicalKeyPoint: 'Clopidogrel and Prasugrel inhibit the P2Y12 receptor; Abciximab inhibits GP IIb/IIIa receptors[cite: 168].',
    pciReference: 'PCI ER-2020 Pharmacology: Drugs Acting on Blood & Blood Forming Agents[cite: 80, 89, 151, 168].'
  },
  {
    id: 'DP-PCOL-007',
    subject: 'Pharmacology',
    topic: 'Chemotherapy Adverse Effects',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which life-threatening neonatal toxicity is caused by Chloramphenicol due to deficient hepatic glucuronyl transferase and inadequate renal excretion in premature infants?',
    options: [
      { key: 'A', text: 'Red Man Syndrome' },
      { key: 'B', text: 'Gray Baby Syndrome' },
      { key: 'C', text: 'Fanconi Syndrome' },
      { key: 'D', text: 'Kernicterus' }
    ],
    correctKey: 'B',
    explanation: 'Neonates have immature UDP-glucuronyl transferase enzymes and poor renal clearance, causing chloramphenicol to accumulate, leading to cardiovascular collapse, cyanosis, and hypothermia (Gray Baby Syndrome)[cite: 37, 171].',
    clinicalKeyPoint: 'Red Man Syndrome is an adverse reaction caused by rapid intravenous infusion of Vancomycin[cite: 171].',
    pciReference: 'PCI ER-2020 Pharmacology: Chemotherapeutic Agents[cite: 80, 151, 170, 171].'
  },

  // =========================================================================
  // 7. COMMUNITY PHARMACY & MANAGEMENT (Course Code: ER20-22T)
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
    explanation: 'FEFO (First-Expiry, First-Out) ensures stock with earlier expiry dates is dispensed ahead of newer batches, minimizing drug obsolescence and expiration losses[cite: 127].',
    clinicalKeyPoint: 'FIFO tracks receiving order, but FEFO takes priority for dated medicines and biologicals[cite: 127].',
    pciReference: 'PCI ER-2020 Community Pharmacy (ER20-22T): Inventory Management[cite: 90, 127].'
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
    explanation: 'Reorder Level = Maximum Daily Consumption × Maximum Reorder Lead Time = 40 bottles/day × 7 days = 280 bottles[cite: 200].',
    clinicalKeyPoint: 'When current inventory drops to 280 bottles, a purchase order must be generated to prevent stockouts[cite: 200].',
    pciReference: 'PCI ER-2020 Community Pharmacy: Inventory Control & Math[cite: 90, 153, 200].'
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
    explanation: 'The official cold chain maintenance range is +2°C to +8°C[cite: 127]. Sub-zero temperatures denature protein antigens in aluminum-adsorbed vaccines (DPT, TT).',
    clinicalKeyPoint: 'Store biologicals on middle shelves; never store vaccines in door compartments where temperature fluctuates.',
    pciReference: 'PCI ER-2020 Community Pharmacy: Cold Chain Management[cite: 90, 127].'
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
    explanation: 'The Teach-Back method asks patients to state or demonstrate their regimen instructions in their own words, confirming understanding and uncovering technique errors[cite: 96].',
    clinicalKeyPoint: 'Teach-Back significantly reduces medication misuse and device-related administration failures[cite: 96].',
    pciReference: 'PCI ER-2020 Community Pharmacy: Patient Counseling[cite: 90, 95, 96].'
  },

  // =========================================================================
  // 8. BIOCHEMISTRY & CLINICAL PATHOLOGY (Course Code: ER20-23T)
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
    explanation: 'Essential amino acids (VIP HALL for MTT): Valine, Isoleucine, Phenylalanine, Histidine, Arginine, Leucine, Lysine, Methionine, Threonine, Tryptophan[cite: 103, 186]. Alanine, Serine, and Aspartate are non-essential[cite: 186].',
    clinicalKeyPoint: 'Leucine and Lysine are purely ketogenic amino acids; their degradation yields acetyl-CoA or acetoacetate[cite: 186].',
    pciReference: 'PCI ER-2020 Biochemistry (ER20-23T): Amino Acid Metabolism[cite: 100, 103, 152, 186].'
  },
  {
    id: 'DP-BIO-002',
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
    explanation: 'B-DNA features a double helix with a diameter of 20 Å (2 nm), a pitch of 34 Å (3.4 nm) containing 10 base pairs per turn, and 3.4 Å between adjacent pairs[cite: 105, 188].',
    clinicalKeyPoint: 'Base pairing adheres to Chargaff\'s rule: A pairs with T via 2 hydrogen bonds; G pairs with C via 3 hydrogen bonds[cite: 105, 188].',
    pciReference: 'PCI ER-2020 Biochemistry: Nucleic Acids[cite: 100, 105, 152, 188].'
  },
  {
    id: 'DP-BIO-003',
    subject: 'Biochemistry',
    topic: 'Lipid Classification & Transport',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which class of plasma lipoproteins transports cholesterol from peripheral tissues back to the liver for excretion, earning it the clinical designation of "Good Cholesterol"?',
    options: [
      { key: 'A', text: 'Chylomicrons' },
      { key: 'B', text: 'Very Low-Density Lipoproteins (VLDL)' },
      { key: 'C', text: 'Low-Density Lipoproteins (LDL)' },
      { key: 'D', text: 'High-Density Lipoproteins (HDL)' }
    ],
    correctKey: 'D',
    explanation: 'High-Density Lipoprotein (HDL) mediates reverse cholesterol transport, removing excess cholesterol from peripheral arterial tissues and returning it to the liver[cite: 104].',
    clinicalKeyPoint: 'Elevated LDL levels ("bad cholesterol") are atherogenic and directly associated with increased coronary artery disease risk[cite: 104].',
    pciReference: 'PCI ER-2020 Biochemistry (ER20-23T): Lipid Metabolism[cite: 100, 104, 152].'
  },
  {
    id: 'DP-BIO-004',
    subject: 'Biochemistry',
    topic: 'Carbohydrate Metabolism (Glycolysis)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In eukaryotic cells, in which cellular compartment does the Embden-Meyerhof glycolytic pathway take place, and what is the net end product under aerobic conditions?',
    options: [
      { key: 'A', text: 'Mitochondrial matrix; Acetyl-CoA' },
      { key: 'B', text: 'Cytoplasm / Cytosol; Pyruvate' },
      { key: 'C', text: 'Endoplasmic reticulum; Lactate' },
      { key: 'D', text: 'Ribosomes; Glucose-6-phosphate' }
    ],
    correctKey: 'B',
    explanation: 'Glycolysis occurs in the cytosol (cytoplasm) of the cell[cite: 108]. Under aerobic conditions, one mole of glucose is broken down into two moles of pyruvate along with net 2 ATP and 2 NADH[cite: 108].',
    clinicalKeyPoint: 'The Krebs / TCA cycle and beta-oxidation occur inside the mitochondrial matrix[cite: 108, 109].',
    pciReference: 'PCI ER-2020 Biochemistry: Carbohydrate Metabolism[cite: 100, 108, 152].'
  },
  {
    id: 'DP-BIO-005',
    subject: 'Biochemistry',
    topic: 'Inborn Errors of Amino Acid Metabolism',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Phenylketonuria (PKU) is an autosomal recessive inborn error of amino acid metabolism caused by congenital deficiency of which hepatic enzyme?',
    options: [
      { key: 'A', text: 'Homogentisate oxidase' },
      { key: 'B', text: 'Phenylalanine hydroxylase' },
      { key: 'C', text: 'Tyrosinase' },
      { key: 'D', text: 'Branched-chain ketoacid dehydrogenase' }
    ],
    correctKey: 'B',
    explanation: 'Phenylketonuria results from deficiency of phenylalanine hydroxylase, preventing conversion of phenylalanine to tyrosine[cite: 110]. Phenylalanine accumulates into neurotoxic phenylpyruvate and phenyllactate[cite: 110].',
    clinicalKeyPoint: 'Homogentisate oxidase deficiency causes Alkaptonuria (characterized by urine turning black upon standing)[cite: 110].',
    pciReference: 'PCI ER-2020 Biochemistry: Amino Acid Metabolism Disorders[cite: 100, 110, 152].'
  },

  // =========================================================================
  // 9. PHARMACOTHERAPEUTICS (Course Code: ER20-24T)
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
    pciReference: 'PCI ER-2020 Pharmacotherapeutics (ER20-24T): Clinical Documentation[cite: 112].'
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
    explanation: 'Mycobacterium tuberculosis undergoes spontaneous chromosomal mutation. Monotherapy rapidly selects for resistant bacilli[cite: 118, 120]. Combining 4 agents with distinct mechanisms prevents resistance emergence and eradicates active and dormant bacilli[cite: 118, 120].',
    clinicalKeyPoint: 'Ethambutol causes optic neuritis (decreased red-green discrimination); Isoniazid causes peripheral neuropathy (prevented with Pyridoxine/B6)[cite: 35].',
    pciReference: 'PCI ER-2020 Pharmacotherapeutics: Infectious Diseases (Tuberculosis)[cite: 112, 118].'
  },
  {
    id: 'DP-THER-003',
    subject: 'Pharmacotherapeutics',
    topic: 'Respiratory Pharmacotherapy (Asthma Rescue)',
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
    explanation: 'Short-acting beta-2 agonists (SABA) like Salbutamol relax bronchial smooth muscle within 3–5 minutes during an acute asthma attack[cite: 31, 114].',
    clinicalKeyPoint: 'Inhaled corticosteroids (Fluticasone, Budesonide) are maintenance anti-inflammatory controllers and are ineffective as immediate bronchodilators[cite: 114].',
    pciReference: 'PCI ER-2020 Pharmacotherapeutics: Respiratory Disorders[cite: 112, 114].'
  },

  // =========================================================================
  // 10. HOSPITAL AND CLINICAL PHARMACY (Course Code: ER20-25T)
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
    clinicalKeyPoint: 'High-alert medications require independent double-checks prior to hospital dispensing and administration[cite: 126, 127].',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy (ER20-25T): Medication Safety[cite: 123, 152].'
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
    explanation: 'The Pharmacy and Therapeutics Committee (PTC) manages formulary drugs, ADR monitoring, and medication use policies[cite: 125, 192]. The hospital pharmacist serves as Member Secretary[cite: 125].',
    clinicalKeyPoint: 'The PTC evaluates drugs using evidence-based parameters: efficacy, safety, quality, and pharmacoeconomic cost-effectiveness[cite: 125, 192].',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy: Hospital Committees[cite: 123, 125, 152, 192].'
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
    explanation: 'Alpha particles are stopped by paper; beta particles are attenuated by plastic/aluminum[cite: 193]. High-frequency gamma and X-rays require high-density lead bricks or concrete shielding[cite: 129, 193].',
    clinicalKeyPoint: 'Disposal of radioactive hospital waste is regulated under Atomic Energy Regulatory Board (AERB) and BARC guidelines[cite: 129].',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy: Radiopharmaceuticals[cite: 123, 129, 152, 193].'
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
    explanation: 'Yellow containers are dedicated to anatomical waste, pathological specimens, soiled dressings, expired cytotoxic drugs, and blood bags for incineration or plasma pyrolysis[cite: 127, 144].',
    clinicalKeyPoint: 'Needles and scalpel blades go into white puncture-proof containers; recyclable tubing/catheters go into red bags[cite: 145].',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy: Biomedical Waste Management[cite: 123, 127, 144, 153].'
  },
  {
    id: 'DP-HOSP-005',
    subject: 'Hospital Pharmacy',
    topic: 'Hospital Accreditation Standards (NABH)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'The National Accreditation Board for Hospitals and Healthcare Providers (NABH) is a constituent board operating under which apex quality organization in India?',
    options: [
      { key: 'A', text: 'Medical Council of India (NMC)' },
      { key: 'B', text: 'Quality Council of India (QCI)' },
      { key: 'C', text: 'Central Drugs Standard Control Organization (CDSCO)' },
      { key: 'D', text: 'Indian Council of Medical Research (ICMR)' }
    ],
    correctKey: 'B',
    explanation: 'NABH is a constituent board of the Quality Council of India (QCI), established to develop and implement healthcare accreditation programs for hospitals across India[cite: 191].',
    clinicalKeyPoint: 'NABH Hospital Standards (5th Edition) contain 10 chapters incorporating 100 standards and 651 objective elements[cite: 191].',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy (ER20-25T): Hospital Standards & NABH[cite: 123, 124, 152, 191].'
  },
  {
    id: 'DP-HOSP-006',
    subject: 'Hospital Pharmacy',
    topic: 'Inpatient Drug Distribution Systems',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which inpatient medication distribution method provides individually packaged, barcoded, single-dose medications labeled for each specific patient for a 24-hour cycle, minimizing hospital medication errors?',
    options: [
      { key: 'A', text: 'Floor Stock System' },
      { key: 'B', text: 'Unit Dose Dispensing System (UDDS)' },
      { key: 'C', text: 'Individual Prescription Order (outpatient style)' },
      { key: 'D', text: 'Emergency Drug Basket Method' }
    ],
    correctKey: 'B',
    explanation: 'The Unit Dose Dispensing System (UDDS) provides each dose in a ready-to-administer package labeled with drug name, strength, batch, and expiry[cite: 128]. It has the lowest incidence of medication errors[cite: 128].',
    clinicalKeyPoint: 'The complete floor stock system carries the highest risk of medication wastage, pilferage, and administration error[cite: 128].',
    pciReference: 'PCI ER-2020 Hospital & Clinical Pharmacy: Drug Distribution Systems[cite: 123, 128, 152].'
  },

  // =========================================================================
  // 11. PHARMACY LAW AND ETHICS (Course Code: ER20-26T)
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
    explanation: 'Schedule M prescribes GMP standards for pharmaceutical factory premises, quality systems, and manufacturing equipment[cite: 137, 196].',
    clinicalKeyPoint: 'Schedule M1 details GMP for homeopathic medicines; Schedule M2 covers cosmetics; Schedule M3 applies to medical devices[cite: 196].',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics (ER20-26T): Drugs & Cosmetics Act 1940[cite: 134, 137, 153, 196].'
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
    explanation: 'Schedule X psychotropics must be dispensed on duplicate prescriptions, with the pharmacist retaining one copy for 2 years[cite: 92, 137]. Outer packaging must display an "XRx" symbol in red[cite: 92].',
    clinicalKeyPoint: 'Schedule X inventory must be stored in a separate, double-locked steel cupboard within the pharmacy[cite: 128].',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Schedule X Regulations[cite: 92, 134, 137].'
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
    explanation: 'The Pharmacy Act requires D.Pharm students to complete 500 hours of practical training over at least 3 months[cite: 135, 204]. Annual registration renewal fees must be paid before December 31st[cite: 136].',
    clinicalKeyPoint: 'The Central Register of Pharmacists is maintained by the Pharmacy Council of India (PCI)[cite: 135].',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Pharmacy Act 1948[cite: 134, 135, 153].'
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
    explanation: 'The Act prohibits misleading advertisements claiming false cures or talismanic magic remedies for conditions specified in the schedule, including cancer, diabetes, and epilepsy[cite: 141].',
    clinicalKeyPoint: 'First conviction carries up to 6 months imprisonment; subsequent convictions carry up to 1 year[cite: 141].',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Magic Remedies Act 1954[cite: 134, 141, 153, 194].'
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
    explanation: 'Ganja is legally defined as the flowering or fruiting tops of Cannabis sativa, excluding seeds and leaves when not accompanied by tops[cite: 140]. Separated resin is classified as Charas[cite: 140].',
    clinicalKeyPoint: 'Administered at the central level by the Narcotics Control Bureau (NCB)[cite: 140].',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: NDPS Act 1985[cite: 134, 140, 153].'
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
    explanation: 'The DPCO is issued by the Central Government under Section 3 of the Essential Commodities Act, 1955, authorizing the NPPA to establish price ceilings on essential drugs[cite: 142].',
    clinicalKeyPoint: 'MAPE (Maximum Allowable Post-manufacturing Expenses) in retail price calculations is capped at 100%.',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: DPCO & NPPA[cite: 134, 142, 153].'
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
    explanation: 'Drug Inspectors appointed under Section 21 of the D&C Act 1940 are deemed Public Servants within the meaning of Section 21 of the IPC, protecting them during lawful inspections[cite: 139, 146].',
    clinicalKeyPoint: 'Obstructing a Drug Inspector in discharge of official duty is a punishable penal offense[cite: 139, 146].',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Government Regulatory Bodies[cite: 134, 139, 146, 153].'
  },
  {
    id: 'DP-LAW-008',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Medical Termination of Pregnancy (MTP) Act',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Under the amended Medical Termination of Pregnancy (MTP) Act, up to what gestational age is therapeutic termination of pregnancy legally permitted for special categories of women (including rape survivors and fetal abnormalities)?',
    options: [
      { key: 'A', text: '12 weeks' },
      { key: 'B', text: '20 weeks' },
      { key: 'C', text: '24 weeks' },
      { key: 'D', text: '28 weeks' }
    ],
    correctKey: 'C',
    explanation: 'Under the MTP Amendment Act, the upper gestational limit for termination of pregnancy was extended from 20 weeks to 24 weeks for defined categories of vulnerable women[cite: 144].',
    clinicalKeyPoint: 'Terminations up to 20 weeks require the opinion of one registered medical practitioner; 20–24 weeks requires the opinion of two registered medical practitioners.',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics (ER20-26T): MTP Act & Rules[cite: 134, 144, 153].'
  },
  {
    id: 'DP-LAW-009',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Food Safety and Standards Act (FSSAI)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Under the Food Safety and Standards Act 2006, what is the mandatory composition requirement regarding female representation among the nominated members of the Food Authority (FSSAI)?',
    options: [
      { key: 'A', text: 'At least 50% must be women' },
      { key: 'B', text: 'At least one-third (1/3rd) of the 22 members shall be women' },
      { key: 'C', text: 'No statutory gender reservation is defined' },
      { key: 'D', text: 'At least 2 female scientists from ICMR' }
    ],
    correctKey: 'B',
    explanation: 'The Food Safety and Standards Act specifies that the Food Authority shall consist of a Chairperson and 22 members, out of which at least one-third (1/3rd) shall be women[cite: 196].',
    clinicalKeyPoint: 'FSSAI headquarters is in New Delhi, with 6 regional offices located in Delhi, Mumbai, Kolkata, Chennai, Guwahati, and Cochin[cite: 196].',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: FSSAI Act and Rules[cite: 134, 142, 153, 196].'
  },
  {
    id: 'DP-LAW-010',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Historical Pharmaceutical Enquiry Committees',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which landmark committee was appointed by the Government of India in 1930 to investigate drug adulteration and recommend pharmaceutical legislation, leading to the enactment of the Drugs and Cosmetics Act 1940?',
    options: [
      { key: 'A', text: 'Bhore Committee' },
      { key: 'B', text: 'Chopra Committee (Drugs Enquiry Committee)' },
      { key: 'C', text: 'Bhatia Committee' },
      { key: 'D', text: 'Hathi Committee' }
    ],
    correctKey: 'B',
    explanation: 'The Drugs Enquiry Committee was appointed in 1930 under the chairmanship of Col. R. N. Chopra (Father of Indian Pharmacology)[cite: 161, 194]. Its recommendations formed the basis for the Drugs and Cosmetics Act of 1940[cite: 194].',
    clinicalKeyPoint: 'The Health Survey and Development Committee was headed by Sir Joseph Bhore in 1943; the Hathi Committee was appointed in 1974[cite: 194].',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: History of Pharmaceutical Legislation in India[cite: 134, 153, 194].'
  }
];

export const PCI_SUBJECT_SUMMARY = [
  {
    name: 'Pharmaceutics',
    code: 'ER20-11T',
    icon: 'Pill',
    description: 'Unit operations, ball mill dynamics, size separation, IP sieve numbers, tablet coating defects & packaging science.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Pharmaceutics').length,
    passRate: '86% Pass Rate'
  },
  {
    name: 'Pharmaceutical Chemistry',
    code: 'ER20-12T',
    icon: 'FlaskConical',
    description: 'Limit tests (Fe, As, Cl), volumetric/diazotization titrations, Hantzsch-Widman nomenclature & medicinal SAR.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Pharmaceutical Chemistry').length,
    passRate: '79% Pass Rate'
  },
  {
    name: 'Pharmacognosy',
    code: 'ER20-13T',
    icon: 'Leaf',
    description: 'Mayer/Wagner/Dragendorff reagents, Thalleioquin test, Keller-Kiliani reaction, Saptadhatu & surgical sutures.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Pharmacognosy').length,
    passRate: '89% Pass Rate'
  },
  {
    name: 'Human Anatomy',
    code: 'ER20-14T',
    icon: 'Heart',
    description: 'Cardiac cycle, stroke volume math, blood coagulation cascade (Factors I-XIII), nephron reabsorption & endocrinology.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Human Anatomy').length,
    passRate: '88% Pass Rate'
  },
  {
    name: 'Social Pharmacy',
    code: 'ER20-15T',
    icon: 'Users',
    description: 'Tiers of prevention, vaccine types (Salk vs Sabin), pharmacoeconomics (QALYs, CUA) & deficiency syndromes.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Social Pharmacy').length,
    passRate: '92% Pass Rate'
  },
  {
    name: 'Pharmacology',
    code: 'ER20-21T',
    icon: 'Activity',
    description: 'Paracetamol antidote, MARPHINE CVS mnemonic, absence seizure T-currents, adrenaline in anaphylaxis & Phase 0 trials.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Pharmacology').length,
    passRate: '82% Pass Rate'
  },
  {
    name: 'Community Pharmacy',
    code: 'ER20-22T',
    icon: 'HeartPulse',
    description: 'FEFO stock rotation, Reorder Level calculation math, cold chain (+2°C to +8°C) & Teach-Back counseling.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Community Pharmacy').length,
    passRate: '88% Pass Rate'
  },
  {
    name: 'Biochemistry',
    code: 'ER20-23T',
    icon: 'Atom',
    description: 'VIP HALL for MTT amino acid mnemonic, Pauly\'s test, Watson-Crick B-DNA geometry & vitamin ring structures.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Biochemistry').length,
    passRate: '85% Pass Rate'
  },
  {
    name: 'Pharmacotherapeutics',
    code: 'ER20-24T',
    icon: 'Stethoscope',
    description: 'SOAP case documentation, HRZE rationale in tuberculosis & acute asthma rescue protocols.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Pharmacotherapeutics').length,
    passRate: '83% Pass Rate'
  },
  {
    name: 'Hospital Pharmacy',
    code: 'ER20-25T',
    icon: 'Building2',
    description: 'Tall Man lettering for LASA drugs, PTC formulary governance, gamma radiation lead shielding & BMW color bins.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Hospital Pharmacy').length,
    passRate: '87% Pass Rate'
  },
  {
    name: 'Pharmacy Law & Ethics',
    code: 'ER20-26T',
    icon: 'Scale',
    description: 'Schedule M GMP parts, Schedule X duplicate rules, Pharmacy Act 500 hrs, NDPS Ganja definition & DPCO / NPPA.',
    questionCount: DPHARM_QUESTIONS.filter(q => q.subject === 'Pharmacy Law & Ethics').length,
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
