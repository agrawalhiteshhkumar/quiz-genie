import { Question, Team } from '../types/quiz';

export const DPHARM_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. PHARMACOLOGY & TOXICOLOGY (ER20-21T)
  // =========================================================================
  {
    id: 'DP-PCOL-001',
    subject: 'Pharmacology',
    topic: 'Antidotes & Toxicology',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'A 24-year-old patient presents after ingesting 20 tablets of 650 mg Paracetamol 4 hours ago. What specific pharmacological antidote must be administered promptly, and what is its mechanism?',
    options: [
      { key: 'A', text: 'Naloxone; displaces toxic metabolites from mu-opioid receptors' },
      { key: 'B', text: 'N-Acetylcysteine (NAC); replenishes hepatic glutathione reserves and conjugates NAPQI' },
      { key: 'C', text: 'Atropine sulfate; blocks parasympathetic muscarinic hyperstimulation' },
      { key: 'D', text: 'Deferoxamine; chelates toxic free iron ions in the portal vein' }
    ],
    correctKey: 'B',
    explanation: 'Toxic paracetamol doses saturate glucuronidation/sulfation, shunting metabolism to CYP2E1 which yields excess NAPQI. N-Acetylcysteine (NAC) supplies sulfhydryl groups to replenish glutathione and neutralize NAPQI.',
    clinicalKeyPoint: 'NAC is most effective when initiated within 8–10 hours post-ingestion (Rumack-Matthew nomogram).',
    pciReference: 'PCI ER-2020 Pharmacology: General Pharmacology & Antidotes.'
  },
  {
    id: 'DP-PCOL-002',
    subject: 'Pharmacology',
    topic: 'Emergency Pharmacology & Anaphylaxis',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'A patient develops bronchospasm, urticaria, angioedema, and hypotension immediately following an intravenous penicillin injection. What is the first-line drug of choice, route, and concentration?',
    options: [
      { key: 'A', text: 'Adrenaline (Epinephrine) 1:1,000 via Intramuscular (IM) injection in the anterolateral thigh' },
      { key: 'B', text: 'Hydrocortisone hemisuccinate 100 mg slow oral suspension' },
      { key: 'C', text: 'Salbutamol inhalation nebules 5 mg as sole rescue agent' },
      { key: 'D', text: 'Chlorpheniramine maleate 25 mg subcutaneous injection' }
    ],
    correctKey: 'A',
    explanation: 'Adrenaline 1:1,000 (0.5 mg IM) is the first-line treatment for anaphylactic shock. Alpha-1 activation reverses hypotension, while beta-2 activation relieves bronchospasm.',
    clinicalKeyPoint: 'Antihistamines and steroids have delayed onsets and do not reverse immediate airway collapse.',
    pciReference: 'PCI ER-2020 Pharmacology: Autonomic Nervous System & Emergency Drugs.'
  },
  {
    id: 'DP-PCOL-003',
    subject: 'Pharmacology',
    topic: 'Organophosphate Poisoning',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'In severe organophosphate insecticide poisoning presenting with miosis (pin-point pupils), salivation, and bradycardia, which drug is administered to reactivate phosphorylated acetylcholinesterase?',
    options: [
      { key: 'A', text: 'Pralidoxime (2-PAM)' },
      { key: 'B', text: 'Neostigmine' },
      { key: 'C', text: 'Physostigmine' },
      { key: 'D', text: 'Pilocarpine' }
    ],
    correctKey: 'A',
    explanation: 'Pralidoxime (2-PAM) binds to organophosphate-inhibited acetylcholinesterase and hydrolyzes the phosphoryl-enzyme bond before aging occurs, restoring enzyme activity.',
    clinicalKeyPoint: 'Atropine treats muscarinic symptoms; pralidoxime treats nicotinic muscle paralysis.',
    pciReference: 'MSBTE D.Pharm Pharmacology: Toxicology & Antidotes.'
  },
  {
    id: 'DP-PCOL-004',
    subject: 'Pharmacology',
    topic: 'Cardiovascular & Anti-anginals',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which route of administration is preferred for Glyceryl Trinitrate (Nitroglycerin) to terminate an acute anginal attack within 2 minutes?',
    options: [
      { key: 'A', text: 'Sublingual route' },
      { key: 'B', text: 'Oral swallowed tablet' },
      { key: 'C', text: 'Intramuscular injection' },
      { key: 'D', text: 'Subcutaneous depot' }
    ],
    correctKey: 'A',
    explanation: 'Nitroglycerin undergoes >90% first-pass hepatic metabolism when swallowed. The sublingual route bypasses the portal system, providing rapid systemic absorption.',
    clinicalKeyPoint: 'Store nitroglycerin sublingual tablets in airtight amber glass containers.',
    pciReference: 'PCI ER-2020 Pharmacology: Cardiovascular Drugs.'
  },
  {
    id: 'DP-PCOL-005',
    subject: 'Pharmacology',
    topic: 'Antihypertensives & Adverse Effects',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'A 55-year-old hypertensive patient started on Enalapril develops a persistent dry, hacking cough without fever. What endogenous substance accumulation causes this adverse effect?',
    options: [
      { key: 'A', text: 'Angiotensin II' },
      { key: 'B', text: 'Bradykinin' },
      { key: 'C', text: 'Aldosterone' },
      { key: 'D', text: 'Renin' }
    ],
    correctKey: 'B',
    explanation: 'ACE is identical to kininase II, which degrades bradykinin. Inhibiting ACE leads to bradykinin and substance P accumulation in bronchial mucosa, triggering dry cough.',
    clinicalKeyPoint: 'Switching the patient to an Angiotensin Receptor Blocker (ARB) such as Losartan resolves the cough.',
    pciReference: 'PCI ER-2020 Pharmacology: Antihypertensive Agents.'
  },
  {
    id: 'DP-PCOL-006',
    subject: 'Pharmacology',
    topic: 'Anticoagulants & Heparin Antidote',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'A postoperative patient on unfractionated intravenous heparin infusion develops hematuria and bleeding from puncture sites. Which specific antidote reverses unfractionated heparin toxicity?',
    options: [
      { key: 'A', text: 'Protamine sulfate' },
      { key: 'B', text: 'Phytomenadione (Vitamin K1)' },
      { key: 'C', text: 'Aminocaproic acid' },
      { key: 'D', text: 'Tranexamic acid' }
    ],
    correctKey: 'A',
    explanation: 'Protamine sulfate is a strongly basic protein that forms an inactive stable salt complex with strongly acidic polyanionic heparin through ionic neutralization.',
    clinicalKeyPoint: '1 mg of protamine sulfate neutralizes approximately 100 USP units of unfractionated heparin.',
    pciReference: 'UPSC Drug Inspector / PCI ER-2020: Drugs Acting on Blood.'
  },
  {
    id: 'DP-PCOL-007',
    subject: 'Pharmacology',
    topic: 'Diabetic Pharmacology & Metformin',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Metformin belongs to the biguanide class. What is its primary cellular mechanism of action for lowering blood glucose, and what rare but fatal complication requires its withholding in severe renal impairment?',
    options: [
      { key: 'A', text: 'Stimulates pancreatic beta-cell insulin secretion; Hypoglycemia' },
      { key: 'B', text: 'Activates AMP-activated protein kinase (AMPK) suppressing hepatic gluconeogenesis; Lactic acidosis' },
      { key: 'C', text: 'Inhibits intestinal alpha-glucosidase; Severe paralytic ileus' },
      { key: 'D', text: 'Inhibits renal SGLT2 transporters; Diabetic ketoacidosis' }
    ],
    correctKey: 'B',
    explanation: 'Metformin activates hepatic AMPK, reducing gluconeogenesis and glycogenolysis while improving insulin sensitivity. In severe renal impairment, mitochondrial complex I inhibition risks fatal lactic acidosis.',
    clinicalKeyPoint: 'Withhold metformin when estimated glomerular filtration rate (eGFR) falls below 30 mL/min/1.73m².',
    pciReference: 'PCI ER-2020 Pharmacology: Oral Hypoglycemic Agents.'
  },
  {
    id: 'DP-PCOL-008',
    subject: 'Pharmacology',
    topic: 'Lipid-Lowering Agents & Statins',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'According to ER-2020 revision notes, through what enzymatic mechanism do statins (e.g., Atorvastatin, Rosuvastatin) reduce endogenous cholesterol synthesis?',
    options: [
      { key: 'A', text: 'Competitive inhibition of HMG-CoA reductase' },
      { key: 'B', text: 'Binding to bile acids in the intestinal lumen' },
      { key: 'C', text: 'Direct activation of lipoprotein lipase via PPAR-alpha' },
      { key: 'D', text: 'Inhibition of intestinal Niemann-Pick C1-Like 1 (NPC1L1) transporter' }
    ],
    correctKey: 'A',
    explanation: 'Statins inhibit 3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase, the rate-limiting enzyme in cholesterol biosynthesis, leading to upregulation of hepatic LDL receptors.',
    clinicalKeyPoint: 'Monitor patients for myalgia and elevated serum creatine kinase (CK) due to potential rhabdomyolysis.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 8) / PCI ER-2020: Hypolipidemic Drugs.'
  },

  // =========================================================================
  // 2. PHARMACEUTICS (ER20-12T)
  // =========================================================================
  {
    id: 'DP-PHARM-001',
    subject: 'Pharmaceutics',
    topic: 'Tablet Manufacturing & Defects',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Medium',
    question: 'During tablet compression on a rotary machine, the top crown of the tablet separates cleanly from the main cylindrical body during ejection. What defect is this, and what is its primary root cause?',
    options: [
      { key: 'A', text: 'Mottling, caused by uneven distribution of colorant in the granule bed' },
      { key: 'B', text: 'Capping, caused by air entrapment and excessive fines in the granulation' },
      { key: 'C', text: 'Lamination, caused exclusively by inadequate binder volume' },
      { key: 'D', text: 'Picking, caused by scratched or pitted punch faces' }
    ],
    correctKey: 'B',
    explanation: 'Capping refers to detachment of the crown from the main tablet body, typically caused by air entrapment during rapid compression, excessive fine powders (<100 mesh), or worn dies.',
    clinicalKeyPoint: 'Corrective actions include installing tapered dies, reducing compression speed, or eliminating fines.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Solid Dosage Forms (Tablets).'
  },
  {
    id: 'DP-PHARM-002',
    subject: 'Pharmaceutics',
    topic: 'Sterilization & Autoclaving Standards',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'According to the Indian Pharmacopoeia (IP), what are the standard autoclaving conditions for moist heat sterilization of aqueous parenteral solutions?',
    options: [
      { key: 'A', text: '100°C at 5 psi for 60 minutes' },
      { key: 'B', text: '121°C at 15 psi (103 kPa) for 15 to 20 minutes' },
      { key: 'C', text: '160°C at 0 psi for 120 minutes' },
      { key: 'D', text: '134°C at 30 psi for 3 minutes without moisture' }
    ],
    correctKey: 'B',
    explanation: 'Moist heat sterilization in an autoclave requires saturated steam at 121°C under 15 psi gauge pressure for 15–20 minutes. Biological indicator: Geobacillus stearothermophilus.',
    clinicalKeyPoint: 'Dry heat sterilization requires 160°C for 2 hours (biological indicator: Bacillus atrophaeus).',
    pciReference: 'PCI ER-2020 Pharmaceutics: Sterilization Technologies & Parenterals.'
  },
  {
    id: 'DP-PHARM-003',
    subject: 'Pharmaceutics',
    topic: 'Capsules & Shell Composition',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In hard gelatin capsule manufacturing, which excipient is added to gelatin solutions to function as an opacifying agent?',
    options: [
      { key: 'A', text: 'Sorbitol' },
      { key: 'B', text: 'Titanium dioxide' },
      { key: 'C', text: 'Methylcellulose' },
      { key: 'D', text: 'Polyethylene glycol (PEG)' }
    ],
    correctKey: 'B',
    explanation: 'Titanium dioxide (0.2%–1.2%) acts as an opacifying agent to protect photosensitive active ingredients.',
    clinicalKeyPoint: 'Sorbitol and glycerin are plasticizers added to soft gelatin capsules to impart flexibility.',
    pciReference: 'MSBTE D.Pharm Pharmaceutics: Capsules & Shell Excipients.'
  },
  {
    id: 'DP-PHARM-004',
    subject: 'Pharmaceutics',
    topic: 'Pharmaceutical Calculations (Stock Dosing)',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A prescription orders 250 mg of Amoxicillin oral suspension. The available stock bottle has a concentration of 125 mg / 5 mL. According to the standard formula: Liquid volume = (Desired dose / Available dose) × Quantity, how many milliliters (mL) must be dispensed?',
    options: [
      { key: 'A', text: '5 mL' },
      { key: 'B', text: '10 mL' },
      { key: 'C', text: '15 mL' },
      { key: 'D', text: '20 mL' }
    ],
    correctKey: 'B',
    explanation: 'Using the formula: Volume = (Desired dose / Available dose) × Volume = (250 mg / 125 mg) × 5 mL = 2 × 5 mL = 10 mL.',
    clinicalKeyPoint: 'Always verify units and strength before calculating volume for pediatric patients.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 4, 14): Rapid Formulas.'
  },
  {
    id: 'DP-PHARM-005',
    subject: 'Pharmaceutics',
    topic: 'Percentage Concentration Calculation',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'In pharmaceutical dispensing calculations, what is the exact equivalent concentration of a 1% w/v solution in terms of milligrams per milliliter (mg/mL)?',
    options: [
      { key: 'A', text: '1 mg/mL' },
      { key: 'B', text: '10 mg/mL' },
      { key: 'C', text: '100 mg/mL' },
      { key: 'D', text: '0.1 mg/mL' }
    ],
    correctKey: 'B',
    explanation: '1% w/v represents 1 gram in 100 mL. Since 1 g = 1,000 mg, 1,000 mg / 100 mL = 10 mg/mL.',
    clinicalKeyPoint: 'Essential for preparing antiseptic solutions and ophthalmic dilutions.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 14): Rapid Formulas.'
  },

  // =========================================================================
  // 3. PHARMACEUTICAL CHEMISTRY (ER20-13T)
  // =========================================================================
  {
    id: 'DP-CHEM-001',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antibacterial Agents & Sulfonamides',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Sulfonamides such as Sulfamethoxazole exert their broad-spectrum bacteriostatic action through which biochemical mechanism?',
    options: [
      { key: 'A', text: 'Inhibition of bacterial cell wall peptidoglycan synthesis via transpeptidase binding' },
      { key: 'B', text: 'Competitive inhibition of the enzyme dihydropteroate synthase due to structural similarity to PABA' },
      { key: 'C', text: 'Irreversible binding to the 50S ribosomal subunit preventing peptide bond formation' },
      { key: 'D', text: 'Inhibition of DNA gyrase (topoisomerase II) preventing bacterial DNA replication' }
    ],
    correctKey: 'B',
    explanation: 'Sulfonamides are structural analogues of PABA and competitively inhibit dihydropteroate synthase (DHPS), blocking bacterial folate synthesis.',
    clinicalKeyPoint: 'Co-trimoxazole pairs Sulfamethoxazole with Trimethoprim for sequential enzyme block synergism.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Anti-infective Agents.'
  },
  {
    id: 'DP-CHEM-002',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Quality Control & Limit Tests',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In the Indian Pharmacopoeia limit test for Iron, which reagent reacts with iron in an ammoniacal solution containing citric acid to form a pale pink to deep reddish-purple soluble complex?',
    options: [
      { key: 'A', text: 'Barium chloride reagent' },
      { key: 'B', text: 'Thioglycollic acid (Mercaptoacetic acid)' },
      { key: 'C', text: 'Silver nitrate solution in dilute nitric acid' },
      { key: 'D', text: 'Potassium iodide solution' }
    ],
    correctKey: 'B',
    explanation: 'Thioglycollic acid reduces Fe3+ to Fe2+ and forms ferrous thioglycollate, producing a purple-red color in ammoniacal medium. Citric acid prevents iron precipitation as ferric hydroxide.',
    clinicalKeyPoint: 'Color intensity is visually compared against a standard iron solution (20 ppm limit) in Nessler cylinders.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Limit Tests.'
  },
  {
    id: 'DP-CHEM-003',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Inorganic Pharmaceuticals & Antacids',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'Why are Aluminium hydroxide and Magnesium hydroxide frequently combined in antacid suspensions?',
    options: [
      { key: 'A', text: 'Aluminium hydroxide causes systemic alkalosis while magnesium causes acidosis' },
      { key: 'B', text: 'Aluminium salts have a constipating effect, which balances the laxative effect of magnesium salts' },
      { key: 'C', text: 'Magnesium destroys enteric coatings while aluminium preserves them' },
      { key: 'D', text: 'To double the gastric absorption of elemental iron' }
    ],
    correctKey: 'B',
    explanation: 'Aluminium hydroxide causes intestinal smooth muscle relaxation leading to constipation, whereas magnesium hydroxide draws fluid into the bowel causing diarrhea. Combining them neutralizes these bowel side effects.',
    clinicalKeyPoint: 'Both agents form insoluble chelates with tetracyclines and fluoroquinolones, preventing antibiotic absorption.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 5) / PCI ER-2020: Inorganic Pharmaceuticals.'
  },

  // =========================================================================
  // 4. PHARMACOGNOSY (ER20-14T)
  // ==========================================
  {
    id: 'DP-COG-001',
    subject: 'Pharmacognosy',
    topic: 'Cardioactive Glycosides',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Medium',
    question: 'Digitalis purpurea leaves contain cardiac glycosides that improve cardiac contractility. Which specific chemical test identifies the presence of deoxysugars (digitoxose) in Digitalis?',
    options: [
      { key: 'A', text: 'Borntrager\'s Test' },
      { key: 'B', text: 'Keller-Kiliani Test' },
      { key: 'C', text: 'Shinoda Test' },
      { key: 'D', text: 'Van Urk\'s Test' }
    ],
    correctKey: 'B',
    explanation: 'The Keller-Kiliani test is specific for 2-deoxysugars (digitoxose). Glacial acetic acid with trace FeCl3 and concentrated H2SO4 produces a reddish-brown junction ring and a bluish-green upper layer.',
    clinicalKeyPoint: 'Borntrager test identifies anthraquinones; Shinoda test detects flavonoids; Van Urk test detects Ergot alkaloids.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Cardiac Glycosides.'
  },
  {
    id: 'DP-COG-002',
    subject: 'Pharmacognosy',
    topic: 'Crude Drug Classification',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In pharmacognosy, how are crude drugs classified based on cellular structure (e.g., Senna leaves vs. Acacia gum)?',
    options: [
      { key: 'A', text: 'Organized drugs retain cellular/tissue structure; unorganized drugs (gums, resins, latexes) lack cellular structure' },
      { key: 'B', text: 'Organized drugs are liquid; unorganized drugs are dry powders' },
      { key: 'C', text: 'Organized drugs are strictly mineral; unorganized drugs are plant derived' },
      { key: 'D', text: 'Organized drugs are all synthetic polymers' }
    ],
    correctKey: 'A',
    explanation: 'Organized drugs represent anatomical plant/animal parts retaining cellular structure (leaves, barks, roots). Unorganized drugs are acellular excretions/secretions such as gums, resins, dried latex, and volatile oils.',
    clinicalKeyPoint: 'Microscopical evaluation (stomata, trichomes) applies to organized crude drugs, whereas physical and chemical evaluation applies to unorganized drugs.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 6): Natural Drugs & Classification.'
  },

  // =========================================================================
  // 5. SOCIAL PHARMACY (ER20-15T)
  // =========================================================================
  {
    id: 'DP-SOC-001',
    subject: 'Social Pharmacy',
    topic: 'Levels of Disease Prevention',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'According to Social Pharmacy public health concepts, immunization and routine childhood vaccination schedules fall under which level of prevention?',
    options: [
      { key: 'A', text: 'Primordial prevention' },
      { key: 'B', text: 'Primary prevention' },
      { key: 'C', text: 'Secondary prevention' },
      { key: 'D', text: 'Tertiary prevention' }
    ],
    correctKey: 'B',
    explanation: 'Primary prevention aims to prevent disease before it occurs (e.g., vaccination, sanitation, safe drinking water). Secondary prevention focuses on early detection (screening), and tertiary prevention focuses on rehabilitation and complication limitation.',
    clinicalKeyPoint: 'Community pharmacists serve as primary prevention advocates by promoting vaccine adherence and cold chain integrity.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 7) / PCI ER-2020: Social Pharmacy.'
  },

  // =========================================================================
  // 6. COMMUNITY PHARMACY & MANAGEMENT (ER20-22T)
  // =========================================================================
  {
    id: 'DP-COMM-001',
    subject: 'Community Pharmacy',
    topic: 'Inventory Management (FEFO)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In community and hospital pharmacy store management, which inventory rotation principle ensures that medicines nearing their expiry date are dispensed first to prevent drug obsolescence?',
    options: [
      { key: 'A', text: 'LIFO (Last-In, First-Out)' },
      { key: 'B', text: 'FIFO (First-In, First-Out)' },
      { key: 'C', text: 'FEFO (First-Expiry, First-Out)' },
      { key: 'D', text: 'VED (Vital, Essential, Desirable)' }
    ],
    correctKey: 'C',
    explanation: 'FEFO (First-Expiry, First-Out) ensures stock with the earliest expiry dates is placed in front and dispensed before batches with longer shelf-lives, minimizing financial loss and stock expiration.',
    clinicalKeyPoint: 'Routine monthly expiry audits are mandatory under Good Pharmacy Practice (GPP).',
    pciReference: 'Navjeevan Exit Exam Notes (p. 9, 14): Community Pharmacy & Management.'
  },
  {
    id: 'DP-COMM-002',
    subject: 'Community Pharmacy',
    topic: 'Patient Counselling Technique',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'During discharge medication counselling, why does the pharmacist ask the patient to repeat the instructions in their own words (the "Teach-Back" method)?',
    options: [
      { key: 'A', text: 'To fulfill legal billing requirements for consultation' },
      { key: 'B', text: 'To confirm the patient understood the usage instructions, dosage, and precautions correctly' },
      { key: 'C', text: 'To test the patient’s memorization of chemical drug structures' },
      { key: 'D', text: 'To transfer legal liability for adverse reactions onto the patient' }
    ],
    correctKey: 'B',
    explanation: 'The Teach-Back method is a patient-centered communication technique where the healthcare provider confirms whether the patient has accurately comprehended instructions, reducing medication administration errors.',
    clinicalKeyPoint: 'Crucial when demonstrating medical devices like pressurized metered-dose inhalers (pMDIs) and insulin injection pens.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 7, 9, 14): Patient Counselling.'
  },

  // =========================================================================
  // 7. BIOCHEMISTRY & CLINICAL PATHOLOGY (ER20-23T)
  // =========================================================================
  {
    id: 'DP-BIO-001',
    subject: 'Biochemistry',
    topic: 'Vitamins & Deficiency Disorders',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Deficiency of Thiamine (Vitamin B1) manifests in which classic clinical condition characterized by peripheral polyneuropathy and high-output congestive heart failure?',
    options: [
      { key: 'A', text: 'Pellagra' },
      { key: 'B', text: 'Beri-Beri' },
      { key: 'C', text: 'Scurvy' },
      { key: 'D', text: 'Rickets' }
    ],
    correctKey: 'B',
    explanation: 'Thiamine deficiency causes Beri-Beri, classified into Dry Beri-Beri (neuropathy, muscle wasting) and Wet Beri-Beri (high-output heart failure, edema). Pellagra is caused by Niacin (B3) deficiency; Scurvy by Vitamin C; Rickets by Vitamin D.',
    clinicalKeyPoint: 'Wernicke-Korsakoff syndrome is a severe neurological manifestation of thiamine deficiency common in chronic alcoholism.',
    pciReference: 'PCI ER-2020 Biochemistry: Vitamins & Co-enzymes.'
  },
  {
    id: 'DP-BIO-002',
    subject: 'Biochemistry',
    topic: 'Clinical Glycemic Monitoring (HbA1c)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In diabetic clinical pathology, what does Glycated Hemoglobin (HbA1c) measure, and over what approximate timeframe does it reflect mean plasma glucose?',
    options: [
      { key: 'A', text: 'Fasting glucose over the preceding 24 hours' },
      { key: 'B', text: 'Post-prandial glucose over the preceding 7 days' },
      { key: 'C', text: 'Average blood glucose exposure over the preceding 90 to 120 days (erythrocyte lifespan)' },
      { key: 'D', text: 'Total hepatic glycogen reserves over 1 year' }
    ],
    correctKey: 'C',
    explanation: 'HbA1c forms via non-enzymatic glycation of the N-terminal valine of the hemoglobin beta chain. Because red blood cells circulate for ~120 days, HbA1c provides an objective retrospective indicator of glycemic control.',
    clinicalKeyPoint: 'Target HbA1c for most non-pregnant adults with diabetes is <7.0%.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 10): Biochemistry & Clinical Pathology.'
  },

  // =========================================================================
  // 8. PHARMACOTHERAPEUTICS & CLINICAL PHARMACY (ER20-24T / ER20-25T)
  // =========================================================================
  {
    id: 'DP-THER-001',
    subject: 'Pharmacotherapeutics',
    topic: 'Clinical Documentation (SOAP)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'In clinical pharmacy case management, what does the standardized acronym "SOAP" represent?',
    options: [
      { key: 'A', text: 'Sterilization, Operation, Asepsis, Parenterals' },
      { key: 'B', text: 'Subjective, Objective, Assessment, Plan' },
      { key: 'C', text: 'Standard, Observation, Antidote, Prescription' },
      { key: 'D', text: 'Symptoms, Optimization, Administration, Pharmacokinetics' }
    ],
    correctKey: 'B',
    explanation: 'SOAP format: S = Subjective (patient complaints/history); O = Objective (vitals/lab findings); A = Assessment (problem diagnosis/severity); P = Plan (medicines, non-drug interventions, monitoring, counselling).',
    clinicalKeyPoint: 'Writing concise SOAP notes is mandatory for documentation and interprofessional rounds.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 11, 14): Pharmacotherapeutics.'
  },
  {
    id: 'DP-THER-002',
    subject: 'Pharmacotherapeutics',
    topic: 'Antitubercular Chemotherapy',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Why does initial intensive phase therapy for active pulmonary tuberculosis (TB) mandate a combination of 4 first-line drugs (HRZE: Isoniazid, Rifampicin, Pyrazinamide, Ethambutol) rather than monotherapy?',
    options: [
      { key: 'A', text: 'To reduce the total financial cost of medication' },
      { key: 'B', text: 'To improve bactericidal efficacy and prevent the emergence of multidrug-resistant mycobacteria' },
      { key: 'C', text: 'To allow lower doses so liver monitoring is unnecessary' },
      { key: 'D', text: 'Because each single drug has zero individual antibacterial activity' }
    ],
    correctKey: 'B',
    explanation: 'Mycobacterium tuberculosis undergoes spontaneous chromosomal mutations. Monotherapy rapidly selects for resistant bacilli. Combining 4 distinct mechanism-of-action drugs prevents resistance emergence and eradicates both active and dormant bacilli.',
    clinicalKeyPoint: 'Directly Observed Treatment, Short-Course (DOTS) ensures adherence and prevents treatment failure.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 11, 14): Pharmacotherapeutics.'
  },
  {
    id: 'DP-HOSP-001',
    subject: 'Hospital & Clinical Pharmacy',
    topic: 'Medication Safety & Look-Alike / Sound-Alike',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In hospital pharmacy medication safety protocols, what enhanced safeguard is used on storage bins and labels to prevent dispensing mix-ups between Look-Alike Sound-Alike (LASA) drugs (e.g., vinBLASTine vs. vinCRIStine)?',
    options: [
      { key: 'A', text: 'Storing both medicines together in alphabetical order' },
      { key: 'B', text: 'Tall Man Lettering and distinct physical separation' },
      { key: 'C', text: 'Dispensing without outer cartons' },
      { key: 'D', text: 'Using handwritten abbreviations only' }
    ],
    correctKey: 'B',
    explanation: 'Tall Man lettering uses capitalized letters to highlight differentiating syllables in look-alike drug names, reducing selection errors.',
    clinicalKeyPoint: 'High-alert medications require dual independent pharmacist verification before administration.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 12): Hospital & Clinical Pharmacy.'
  },

  // =========================================================================
  // 9. PHARMACY LAW & ETHICS (ER20-26T)
  // =========================================================================
  {
    id: 'DP-LAW-001',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Drugs and Cosmetics Act, 1940 & Rules',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Under the Drugs and Cosmetics Rules 1945, which schedule prescribes the standards for Good Manufacturing Practices (GMP) and requirements of premises, plant, and equipment?',
    options: [
      { key: 'A', text: 'Schedule H' },
      { key: 'B', text: 'Schedule M' },
      { key: 'C', text: 'Schedule X' },
      { key: 'D', text: 'Schedule P' }
    ],
    correctKey: 'B',
    explanation: 'Schedule M specifies Good Manufacturing Practices (GMP) for premises, equipment, sanitation, and quality management. Schedule H governs prescription drugs; Schedule X governs psychotropics; Schedule P governs shelf life.',
    clinicalKeyPoint: 'Schedule M compliance is mandatory for all manufacturing license renewals.',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Drugs & Cosmetics Act 1940.'
  },
  {
    id: 'DP-LAW-002',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Schedule X Regulations & Storage',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'Which legal mandate specifically applies to drugs categorized under Schedule X of the Drugs and Cosmetics Rules, 1945?',
    options: [
      { key: 'A', text: 'They may be sold over-the-counter (OTC) provided an entry is made in the daybook' },
      { key: 'B', text: 'Retailers must retain a copy of the prescription and detailed sales record for at least 2 years' },
      { key: 'C', text: 'They are exempted from displaying any red vertical warning line on the outer carton' },
      { key: 'D', text: 'Prescriptions for Schedule X drugs can be refilled up to 5 times without physician review' }
    ],
    correctKey: 'B',
    explanation: 'Schedule X covers psychotropic substances (e.g., Ketamine, Amobarbital). Prescriptions must be in duplicate, with the pharmacist retaining one copy for 2 years. Outer packaging must display an "XRx" symbol in red.',
    clinicalKeyPoint: 'Schedule X drugs must be kept under double lock in pharmacies.',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: Schedule X Compliance.'
  },
  {
    id: 'DP-LAW-003',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Pharmacy Act, 1948',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'According to Section 5 of the Pharmacy Act 1948, what is the term of office for elected and nominated members of the Pharmacy Council of India (PCI)?',
    options: [
      { key: 'A', text: '3 Years' },
      { key: 'B', text: '5 Years' },
      { key: 'C', text: '6 Years' },
      { key: 'D', text: 'Permanent until superannuation' }
    ],
    correctKey: 'B',
    explanation: 'Elected and nominated members of the Central Pharmacy Council hold office for a 5-year term from their date of election or nomination.',
    clinicalKeyPoint: 'Members are eligible for re-election or re-nomination upon term completion.',
    pciReference: 'MSBTE Pharmacy Law & Ethics: Pharmacy Act 1948.'
  },

  // =========================================================================
  // 10. HUMAN ANATOMY & PHYSIOLOGY (ER20-11T)
  // =========================================================================
  {
    id: 'DP-HAP-001',
    subject: 'Human Anatomy',
    topic: 'Cardiovascular Conduction System',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In the cardiac conduction system of the human heart, which tissue functions as the primary pacemaker due to having the highest intrinsic rate of automaticity?',
    options: [
      { key: 'A', text: 'Sinoatrial (SA) Node' },
      { key: 'B', text: 'Atrioventricular (AV) Node' },
      { key: 'C', text: 'Bundle of His' },
      { key: 'D', text: 'Purkinje Fibers' }
    ],
    correctKey: 'A',
    explanation: 'The SA node in the right atrium near the superior vena cava generates action potentials at 60–100 bpm, pacing the normal sinus rhythm.',
    clinicalKeyPoint: 'If the SA node fails, the AV node assumes pacing at an intrinsic rate of 40–60 bpm.',
    pciReference: 'MSBTE HAP: Cardiovascular System.'
  },
  {
    id: 'DP-HAP-002',
    subject: 'Human Anatomy',
    topic: 'Cardiac Output Physiology',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A healthy adult with a resting heart rate of 72 beats per minute and an average stroke volume of 70 mL per beat has an estimated resting Cardiac Output (CO = Heart Rate × Stroke Volume) of approximately:',
    options: [
      { key: 'A', text: '2.5 L/min' },
      { key: 'B', text: '5.0 L/min' },
      { key: 'C', text: '7.5 L/min' },
      { key: 'D', text: '10.0 L/min' }
    ],
    correctKey: 'B',
    explanation: 'Cardiac Output = Heart Rate × Stroke Volume = 72 beats/min × 70 mL/beat = 5,040 mL/min ≈ 5.0 Liters/min.',
    clinicalKeyPoint: 'During strenuous exercise, cardiac output can increase to 20–25 L/min to meet metabolic demand.',
    pciReference: 'Navjeevan Exit Exam Notes (p. 3, 14): Cardiovascular System.'
  }
];

export const PCI_SUBJECT_SUMMARY = [
  {
    name: 'Pharmacology',
    code: 'ER20-21T',
    icon: 'Activity',
    description: 'Mechanism of action, drug classifications, adverse reactions, contraindications & emergency antidotes.',
    questionCount: 50,
    passRate: '82% Pass Rate'
  },
  {
    name: 'Pharmaceutics',
    code: 'ER20-11T',
    icon: 'Pill',
    description: 'Formulation science, solid/liquid dosage forms, tablet defects, sterile products & IP packaging standards.',
    questionCount: 45,
    passRate: '86% Pass Rate'
  },
  {
    name: 'Pharmaceutical Chemistry',
    code: 'ER20-12T',
    icon: 'FlaskConical',
    description: 'SAR, medicinal chemistry structures, IUPAC nomenclature, limit tests (IP), and stability.',
    questionCount: 42,
    passRate: '79% Pass Rate'
  },
  {
    name: 'Pharmacognosy',
    code: 'ER20-13T',
    icon: 'Leaf',
    description: 'Crude drugs, botanical sources, chemical identification tests (Keller-Kiliani, Borntrager), and adulterants.',
    questionCount: 40,
    passRate: '89% Pass Rate'
  },
  {
    name: 'Social Pharmacy',
    code: 'ER20-15T',
    icon: 'Users',
    description: 'Public health, preventive medicine, immunisation schedules, nutrition & national health priorities.',
    questionCount: 30,
    passRate: '92% Pass Rate'
  },
  {
    name: 'Community Pharmacy',
    code: 'ER20-22T',
    icon: 'HeartPulse',
    description: 'Prescription handling, patient counselling, OTC advice, FEFO inventory & cold chain management.',
    questionCount: 35,
    passRate: '88% Pass Rate'
  },
  {
    name: 'Biochemistry',
    code: 'ER20-23T',
    icon: 'Atom',
    description: 'Metabolic pathways, vitamins, enzymes, liver/renal tests, diabetes markers & clinical pathology.',
    questionCount: 32,
    passRate: '85% Pass Rate'
  },
  {
    name: 'Pharmacotherapeutics',
    code: 'ER20-24T',
    icon: 'Stethoscope',
    description: 'Clinical reasoning, SOAP cases, rational drug therapy, antibiotic stewardship & disease management.',
    questionCount: 35,
    passRate: '83% Pass Rate'
  },
  {
    name: 'Hospital Pharmacy',
    code: 'ER20-25T',
    icon: 'Building2',
    description: 'Hospital distribution systems, medication safety, LASA drugs, TDM & clinical pharmacy practice.',
    questionCount: 30,
    passRate: '87% Pass Rate'
  },
  {
    name: 'Pharmacy Law & Ethics',
    code: 'ER20-26T',
    icon: 'Scale',
    description: 'Drugs & Cosmetics Act 1940, Schedules (M, H, X), Pharmacy Act 1948, NDPS Act & Code of Ethics.',
    questionCount: 38,
    passRate: '91% Pass Rate'
  },
  {
    name: 'Human Anatomy',
    code: 'ER20-11T',
    icon: 'Heart',
    description: 'Cell physiology, cardiovascular output, nephron filtration, endocrine regulation & nervous reflexes.',
    questionCount: 32,
    passRate: '88% Pass Rate'
  }
];

export const INITIAL_TEAMS: Team[] = [
  {
    id: 'team-alpha',
    name: 'Team Galen (Pharma Titans)',
    college: 'D. P. Kharde Navjeevan College of Pharmacy',
    points: 7,
    correctAnswers: 7,
    wrongAnswers: 1,
    streak: 3,
    avatarBg: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'team-beta',
    name: 'Team Curare (Pharmacologists)',
    college: 'Apex Institute of Pharmaceutical Sciences',
    points: 6,
    correctAnswers: 6,
    wrongAnswers: 2,
    streak: 1,
    avatarBg: 'from-teal-600 to-emerald-700'
  },
  {
    id: 'team-gamma',
    name: 'Team Penicillin (Chem Innovators)',
    college: 'Metropolitan Pharmacy Academy',
    points: 5,
    correctAnswers: 5,
    wrongAnswers: 2,
    streak: 0,
    avatarBg: 'from-amber-600 to-orange-700'
  },
  {
    id: 'team-delta',
    name: 'Team Digitalis (Clinicians)',
    college: 'Central State Pharmacy College',
    points: 4,
    correctAnswers: 4,
    wrongAnswers: 3,
    streak: 0,
    avatarBg: 'from-rose-600 to-pink-700'
  }
];
