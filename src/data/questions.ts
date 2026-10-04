import { Question, Team } from '../types/quiz';

export const DPHARM_QUESTIONS: Question[] = [
  // --- PHARMACEUTICS (MSBTE & PCI ER-2020) ---
  {
    id: 'DP-PHARM-001',
    subject: 'Pharmaceutics',
    topic: 'Tablet Manufacturing & Defects',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Medium',
    question: 'During tablet compression on a high-speed rotary machine, the top crown of the tablet separates cleanly from the main cylindrical body during ejection. What defect is this, and what is its primary root cause?',
    options: [
      { key: 'A', text: 'Mottling, caused by uneven distribution of colorant in the granule bed' },
      { key: 'B', text: 'Capping, caused by air entrapment and excessive fines in the granulation' },
      { key: 'C', text: 'Lamination, caused exclusively by inadequate binder volume' },
      { key: 'D', text: 'Picking, caused by scratched or pitted punch faces' }
    ],
    correctKey: 'B',
    explanation: 'Capping refers to the partial or complete detachment of the upper or lower crown of a tablet from the main body. The primary causes are air entrapment during rapid compression, excessive fine powders (<100 mesh), too little moisture in granules, or worn die rings with a "wear ring" groove at the compression zone.',
    clinicalKeyPoint: 'Immediate corrective action in pharmaceutical processing includes installing tapered dies, reducing compression speed to allow air escape, or re-sifting to eliminate fines.',
    pciReference: 'PCI D.Pharm ER-2020: Pharmaceutics (Theory) - Unit III: Solid Dosage Forms (Tablets).'
  },
  {
    id: 'DP-PHARM-007',
    subject: 'Pharmaceutics',
    topic: 'Sterilization & Autoclaving Standards',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'According to the Indian Pharmacopoeia (IP), what are the standard autoclaving conditions (temperature, pressure, and exposure holding time) for moist heat sterilization of aqueous parenteral solutions?',
    options: [
      { key: 'A', text: '100°C at 5 psi for 60 minutes' },
      { key: 'B', text: '121°C at 15 psi (103 kPa) for 15 to 20 minutes' },
      { key: 'C', text: '160°C at 0 psi for 120 minutes' },
      { key: 'D', text: '134°C at 30 psi for 3 minutes without moisture' }
    ],
    correctKey: 'B',
    explanation: 'Moist heat sterilization in an autoclave requires saturated steam at 121°C (250°F) under 15 pounds per square inch (psi) gauge pressure held for 15 to 20 minutes. Biological indicator used to validate this process is spores of Geobacillus stearothermophilus.',
    clinicalKeyPoint: 'Dry heat sterilization requires 160°C for 2 hours or 170°C for 1 hour (using Bacillus atrophaeus spores as indicator).',
    pciReference: 'PCI D.Pharm ER-2020: Pharmaceutics - Unit VI: Sterilization Technologies & Parenterals.'
  },
  {
    id: 'DP-PHARM-011',
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
    explanation: 'Titanium dioxide (TiO2) is widely used in concentrations of 0.2% to 1.2% as an opacifying agent in capsule shells to render them opaque and protect light-sensitive active pharmaceutical ingredients.',
    clinicalKeyPoint: 'Sorbitol and glycerin are plasticizers used in soft gelatin capsules to impart flexibility and elasticity.',
    pciReference: 'MSBTE D.Pharm Pharmaceutics / PCI ER-2020: Capsules & Packaging.'
  },
  {
    id: 'DP-PHARM-012',
    subject: 'Pharmaceutics',
    topic: 'Emulsions & Stability',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'When an emulsion exhibits an upward or downward movement of dispersed droplets forming a concentrated layer that can be easily redispersed by shaking, the instability is termed:',
    options: [
      { key: 'A', text: 'Cracking (Breaking)' },
      { key: 'B', text: 'Creaming' },
      { key: 'C', text: 'Phase Inversion' },
      { key: 'D', text: 'Coalescence' }
    ],
    correctKey: 'B',
    explanation: 'Creaming is a reversible phenomenon governed by Stokes\' Law where droplets rise (upward creaming in O/W) or sink (downward sedimentation in W/O) based on density differences. It can be reversed by gentle agitation.',
    clinicalKeyPoint: 'Cracking is irreversible destruction of the protective emulsifying film, requiring reformulation.',
    pciReference: 'MSBTE Pharmaceutics - Biphasic Liquid Dosage Forms (Emulsions).'
  },

  // --- PHARMACOLOGY (MSBTE & PCI ER-2020) ---
  {
    id: 'DP-PCOL-002',
    subject: 'Pharmacology',
    topic: 'Antidotes & Toxicology',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'A 24-year-old patient presents to the emergency department after ingesting 20 tablets of 650 mg Paracetamol 4 hours ago. What specific pharmacological antidote must be administered promptly, and what is its mechanism?',
    options: [
      { key: 'A', text: 'Naloxone; acts by displacing toxic metabolites from mu-opioid receptors' },
      { key: 'B', text: 'N-Acetylcysteine (NAC); replenishes hepatic glutathione reserves and conjugates NAPQI' },
      { key: 'C', text: 'Atropine sulfate; blocks parasympathetic muscarinic hyperstimulation' },
      { key: 'D', text: 'Deferoxamine; chelates toxic free iron ions in the portal vein' }
    ],
    correctKey: 'B',
    explanation: 'In toxic doses, paracetamol metabolism saturates normal glucuronidation and sulfation pathways, leading CYP2E1 to generate excess N-acetyl-p-benzoquinone imine (NAPQI). Once endogenous hepatic glutathione is depleted by >70%, NAPQI binds covalently to hepatic macromolecules causing centrilobular necrosis. N-acetylcysteine (NAC) acts as a sulfhydryl donor to restore glutathione levels and can directly detoxify NAPQI.',
    clinicalKeyPoint: 'NAC is most effective when administered within 8-10 hours of paracetamol ingestion (Rumack-Matthew nomogram guiding treatment).',
    pciReference: 'PCI D.Pharm ER-2020: Pharmacology (Theory) - Unit VII: Drugs Acting on Central Nervous System & Toxicology.'
  },
  {
    id: 'DP-PCOL-008',
    subject: 'Pharmacology',
    topic: 'Emergency Pharmacology & Anaphylaxis',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'A patient develops sudden severe bronchospasm, urticaria, angioedema, and hypotension immediately following an intravenous penicillin injection. What is the immediate first-line drug of choice, route, and concentration?',
    options: [
      { key: 'A', text: 'Adrenaline (Epinephrine) 1:1,000 via Intramuscular (IM) injection in the anterolateral thigh' },
      { key: 'B', text: 'Hydrocortisone hemisuccinate 100 mg slow oral suspension' },
      { key: 'C', text: 'Salbutamol inhalation nebules 5 mg as sole rescue agent' },
      { key: 'D', text: 'Chlorpheniramine maleate 25 mg subcutaneous injection' }
    ],
    correctKey: 'A',
    explanation: 'Adrenaline (Epinephrine) 1:1000 (0.5 mg in adults) administered intramuscularly (IM) into the mid-anterolateral thigh is the undisputed first-line treatment for anaphylactic shock. It reverses peripheral vasodilation and reduces mucosal edema via alpha-1 adrenergic vasoconstriction, while relieving bronchospasm via beta-2 receptor activation.',
    clinicalKeyPoint: 'Corticosteroids and antihistamines are second-line agents that have a delayed onset of action (hours) and do not reverse acute airway compromise or cardiovascular collapse.',
    pciReference: 'PCI D.Pharm ER-2020: Pharmacology - Unit II: Autonomic Nervous System & Emergency Drugs.'
  },
  {
    id: 'DP-PCOL-013',
    subject: 'Pharmacology',
    topic: 'Organophosphate Poisoning',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'In severe organophosphate insecticide poisoning exhibiting pin-point pupils, excessive salivation, and bradycardia, which drug is administered to reactivate inhibited acetylcholinesterase?',
    options: [
      { key: 'A', text: 'Pralidoxime (2-PAM)' },
      { key: 'B', text: 'Neostigmine' },
      { key: 'C', text: 'Physostigmine' },
      { key: 'D', text: 'Pilocarpine' }
    ],
    correctKey: 'A',
    explanation: 'Pralidoxime (2-PAM) is an oxime cholinesterase reactivator that binds to organophosphate-inactivated acetylcholinesterase and removes the phosphoryl group before "aging" occurs, restoring enzyme activity.',
    clinicalKeyPoint: 'Atropine blocks muscarinic signs, but only pralidoxime reverses peripheral nicotinic neuromuscular paralysis.',
    pciReference: 'MSBTE D.Pharm Pharmacology & Toxicology - Autonomic Drugs.'
  },
  {
    id: 'DP-PCOL-014',
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
    explanation: 'Nitroglycerin undergoes >90% first-pass hepatic metabolism when swallowed. The sublingual route bypasses the liver portal system completely, providing rapid absorption directly into the systemic circulation.',
    clinicalKeyPoint: 'Store nitroglycerin sublingual tablets in airtight amber glass bottles; volatile nitrates degrade in plastic.',
    pciReference: 'PCI ER-2020 Pharmacology - Cardiovascular Drugs.'
  },

  // --- PHARMACOGNOSY (MSBTE & PCI ER-2020) ---
  {
    id: 'DP-COG-004',
    subject: 'Pharmacognosy',
    topic: 'Cardioactive Glycosides',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Medium',
    question: 'Digitalis purpurea leaves contain cardiac glycosides that improve cardiac contractility in congestive heart failure. Which specific chemical test identifies the presence of deoxysugars (digitoxose) in Digitalis?',
    options: [
      { key: 'A', text: 'Borntrager\'s Test' },
      { key: 'B', text: 'Keller-Kiliani Test' },
      { key: 'C', text: 'Shinoda Test' },
      { key: 'D', text: 'Van Urk\'s Test' }
    ],
    correctKey: 'B',
    explanation: 'Keller-Kiliani test is specific for 2-deoxysugars (digitoxose) found in cardiac glycosides. The plant extract is treated with glacial acetic acid containing a trace of ferric chloride, followed by concentrated sulfuric acid, producing a reddish-brown ring at the junction and a bluish-green upper acetic acid layer.',
    clinicalKeyPoint: 'Borntrager test detects anthraquinone glycosides (Senna), Shinoda test detects flavonoids, and Van Urk test detects Ergot alkaloids.',
    pciReference: 'PCI D.Pharm ER-2020: Pharmacognosy (Theory) - Unit IV: Cardiac Glycosides & Isolation.'
  },
  {
    id: 'DP-COG-015',
    subject: 'Pharmacognosy',
    topic: 'Alkaloid Identification Tests',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Dragendorff\'s reagent, widely utilized for general qualitative detection of alkaloids in crude plant extracts, chemically consists of:',
    options: [
      { key: 'A', text: 'Potassium bismuth iodide solution' },
      { key: 'B', text: 'Potassium mercuric iodide solution (Mayer\'s reagent)' },
      { key: 'C', text: 'Iodine in potassium iodide solution (Wagner\'s reagent)' },
      { key: 'D', text: 'Saturated picric acid solution (Hager\'s reagent)' }
    ],
    correctKey: 'A',
    explanation: 'Dragendorff\'s reagent is potassium bismuth iodide solution, which produces an orange or reddish-brown precipitate in the presence of alkaloids.',
    clinicalKeyPoint: 'Mayer\'s reagent gives a cream precipitate; Wagner\'s reagent gives a reddish-brown precipitate; Hager\'s reagent gives a yellow crystalline precipitate.',
    pciReference: 'MSBTE D.Pharm Pharmacognosy - Chemical Tests of Alkaloids.'
  },
  {
    id: 'DP-COG-016',
    subject: 'Pharmacognosy',
    topic: 'Anthraquinone Glycosides',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Senna leaves (Cassia angustifolia) contain sennosides A and B. Which chemical test confirms anthraquinone glycosides through a characteristic rose-pink color in the ammoniacal layer?',
    options: [
      { key: 'A', text: 'Borntrager\'s test' },
      { key: 'B', text: 'Vitali-Morin test' },
      { key: 'C', text: 'Legal test' },
      { key: 'D', text: 'Murexide test' }
    ],
    correctKey: 'A',
    explanation: 'In Borntrager\'s test, hydrolyzing anthraquinone glycosides with dilute acid followed by extraction into benzene/ether and shaking with ammonia yields a characteristic rose-pink or cherry-red color in the upper ammoniacal phase.',
    clinicalKeyPoint: 'Modified Borntrager\'s test (using FeCl3) is required for C-glycosides like Aloin.',
    pciReference: 'PCI ER-2020 Pharmacognosy - Laxative Drugs & Glycosides.'
  },

  // --- PHARMACEUTICAL CHEMISTRY (MSBTE & PCI ER-2020) ---
  {
    id: 'DP-CHEM-005',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antibacterial Agents & Sulfonamides',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Sulfonamides such as Sulfamethoxazole exert their broad-spectrum bacteriostatic action by which biochemical mechanism?',
    options: [
      { key: 'A', text: 'Inhibition of bacterial cell wall peptidoglycan synthesis via transpeptidase binding' },
      { key: 'B', text: 'Competitive inhibition of the enzyme dihydropteroate synthase due to structural similarity to PABA' },
      { key: 'C', text: 'Irreversible binding to the 50S ribosomal subunit preventing peptide bond formation' },
      { key: 'D', text: 'Inhibition of DNA gyrase (topoisomerase II) preventing bacterial DNA replication' }
    ],
    correctKey: 'B',
    explanation: 'Sulfonamides are structural analogues of Para-Aminobenzoic Acid (PABA). They competitively inhibit bacterial dihydropteroate synthase (DHPS), an enzyme essential for de novo folic acid synthesis. Mammalian cells absorb preformed dietary folic acid and are unaffected.',
    clinicalKeyPoint: 'Co-trimoxazole combines Sulfamethoxazole with Trimethoprim (inhibitor of dihydrofolate reductase) to achieve sequential block synergism (bactericidal).',
    pciReference: 'PCI D.Pharm ER-2020: Pharmaceutical Chemistry - Unit VIII: Anti-infective Agents (Sulfonamides).'
  },
  {
    id: 'DP-CHEM-010',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Quality Control & Limit Tests',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In the Indian Pharmacopoeia limit test for Iron, what reagent reacts with iron in an ammoniacal solution containing citric acid to form a characteristic pale pink to deep reddish-purple soluble complex?',
    options: [
      { key: 'A', text: 'Barium chloride reagent' },
      { key: 'B', text: 'Thioglycollic acid (Mercaptoacetic acid)' },
      { key: 'C', text: 'Silver nitrate solution in dilute nitric acid' },
      { key: 'D', text: 'Potassium iodide solution' }
    ],
    correctKey: 'B',
    explanation: 'The IP limit test for iron is based on the reaction of iron with thioglycollic acid in the presence of citric acid and ammonia. Citric acid prevents precipitation of iron by ammonia as ferric hydroxide. Thioglycollic acid reduces ferric (Fe3+) to ferrous (Fe2+) and forms a coordination complex (ferrous thioglycollate) that is purple-red.',
    clinicalKeyPoint: 'The color intensity produced in the test solution is compared against a standard iron solution (usually 20 ppm or specified monograph limit) using Nessler cylinders.',
    pciReference: 'PCI D.Pharm ER-2020: Pharmaceutical Chemistry - Unit I: Limit Tests (IP Standards).'
  },
  {
    id: 'DP-CHEM-017',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Limit Test for Arsenic',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In the standard Gutzeit apparatus used for the IP Limit Test for Arsenic, which chemical test paper is positioned at the top of the tube to produce a yellow stain upon reaction with arsine gas?',
    options: [
      { key: 'A', text: 'Mercuric chloride paper' },
      { key: 'B', text: 'Lead acetate cotton plug' },
      { key: 'C', text: 'Silver nitrate paper' },
      { key: 'D', text: 'Litmus paper' }
    ],
    correctKey: 'A',
    explanation: 'Arsenic is converted into arsine gas (AsH3) by nascent hydrogen generated from zinc and hydrochloric acid. Arsine reacts with dry mercuric chloride paper (HgCl2) to yield a yellow-brown stain. The lead acetate cotton plug traps hydrogen sulfide (H2S) impurities.',
    clinicalKeyPoint: 'Presence of H2S would falsely darken the mercuric chloride paper, hence lead acetate cotton is indispensable.',
    pciReference: 'MSBTE D.Pharm Chemistry - Unit 1: Limit Tests.'
  },
  {
    id: 'DP-CHEM-018',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antitubercular Agents',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Isoniazid (INH) is a first-line bactericidal drug for tuberculosis. Co-administration of which vitamin is mandatory to prevent drug-induced peripheral neuropathy?',
    options: [
      { key: 'A', text: 'Pyridoxine (Vitamin B6)' },
      { key: 'B', text: 'Cyanocobalamin (Vitamin B12)' },
      { key: 'C', text: 'Thiamine (Vitamin B1)' },
      { key: 'D', text: 'Riboflavin (Vitamin B2)' }
    ],
    correctKey: 'A',
    explanation: 'Isoniazid combines with pyridoxal phosphate to form inactive hydrazones and promotes renal excretion of pyridoxine, leading to deficiency and peripheral neuropathy. Supplying 10–25 mg daily of Vitamin B6 prevents this toxicity.',
    clinicalKeyPoint: 'Mandatory in high-risk patients: diabetics, alcoholics, pregnant women, and malnourished patients on DOTS therapy.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry - Anti-tubercular Drugs.'
  },

  // --- PHARMACY LAW & ETHICS (MSBTE & PCI ER-2020) ---
  {
    id: 'DP-LAW-003',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Drugs and Cosmetics Act, 1940 & Rules',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Under the Drugs and Cosmetics Rules 1945, which schedule prescribes the standards for Good Manufacturing Practices (GMP) and requirements of premises, plant, and equipment for pharmaceutical products?',
    options: [
      { key: 'A', text: 'Schedule H' },
      { key: 'B', text: 'Schedule M' },
      { key: 'C', text: 'Schedule X' },
      { key: 'D', text: 'Schedule P' }
    ],
    correctKey: 'B',
    explanation: 'Schedule M specifies the requirements of Good Manufacturing Practices (GMP) for premises, quality management systems, water systems, sanitation, and manufacturing equipment. Schedule H is for prescription drugs; Schedule X governs psychotropic and habit-forming substances; Schedule P dictates life period (expiry dates) and storage conditions of drugs.',
    clinicalKeyPoint: 'Schedule M compliance ensures the batch-to-batch uniformity, sterility, and contamination-free formulation essential for all pharmaceutical manufacturing units.',
    pciReference: 'PCI D.Pharm ER-2020: Pharmacy Law & Ethics - Unit II: Drugs & Cosmetics Act 1940 and Rules 1945.'
  },
  {
    id: 'DP-LAW-009',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Schedule X Regulations & Storage',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'Which of the following legal mandates specifically applies to drugs categorized under Schedule X of the Drugs and Cosmetics Rules, 1945?',
    options: [
      { key: 'A', text: 'They may be sold over-the-counter (OTC) provided an entry is made in the daybook' },
      { key: 'B', text: 'Retailers must retain a copy of the prescription and detailed sales record for at least 2 years' },
      { key: 'C', text: 'They are exempted from displaying any red vertical warning line on the outer carton' },
      { key: 'D', text: 'Prescriptions for Schedule X drugs can be refilled up to 5 times without physician review' }
    ],
    correctKey: 'B',
    explanation: 'Schedule X covers potent habit-forming psychotropic substances (e.g., Ketamine, Methylphenidate, Amobarbital). Prescriptions must be in duplicate (pharmacist retains one copy for 2 years). The drug label must display a prominent symbol "XRx" in red on the top left corner, and sales records must be preserved in a dedicated Schedule X register.',
    clinicalKeyPoint: 'Strict adherence to Schedule X storage in double-locked cupboards is inspected by the State Drugs Control Department during routine retail pharmacy audits.',
    pciReference: 'PCI D.Pharm ER-2020: Pharmacy Law & Ethics - Unit III: Controlled Substances & Schedule X Compliance.'
  },
  {
    id: 'DP-LAW-019',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Pharmacy Act, 1948',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'According to the Pharmacy Act 1948, what is the term of office for elected and nominated members of the Pharmacy Council of India (PCI)?',
    options: [
      { key: 'A', text: '3 Years' },
      { key: 'B', text: '5 Years' },
      { key: 'C', text: '6 Years' },
      { key: 'D', text: 'Permanent until superannuation' }
    ],
    correctKey: 'B',
    explanation: 'Under Section 5 of the Pharmacy Act, 1948, an elected or nominated member of the Central Council (PCI) holds office for a term of 5 years from the date of nomination or election.',
    clinicalKeyPoint: 'Members are eligible for re-nomination or re-election upon expiry of their 5-year tenure.',
    pciReference: 'MSBTE / PCI ER-2020 Pharmacy Law & Ethics - Pharmacy Act 1948.'
  },
  {
    id: 'DP-LAW-020',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Drug Schedules',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Under the Drugs and Cosmetics Rules 1945, which schedule details standards for ophthalmic preparations (eye drops and eye ointments)?',
    options: [
      { key: 'A', text: 'Schedule FF' },
      { key: 'B', text: 'Schedule G' },
      { key: 'C', text: 'Schedule J' },
      { key: 'D', text: 'Schedule Y' }
    ],
    correctKey: 'A',
    explanation: 'Schedule FF lays down exact standards for ophthalmic preparations (sterility, particulate matter, packaging). Schedule G covers hormonal and antidiabetic drugs requiring medical supervision; Schedule J lists incurable diseases; Schedule Y details clinical trials.',
    clinicalKeyPoint: 'Schedule FF mandates that eye drops remain sterile until container opening and contain authorized preservatives.',
    pciReference: 'MSBTE Board Exam - Pharmacy Law & Schedules.'
  },

  // --- COMMUNITY & CLINICAL PHARMACY (MSBTE & PCI ER-2020) ---
  {
    id: 'DP-CLIN-006',
    subject: 'Community Pharmacy',
    topic: 'Drug Interactions & Prescriptions',
    bloomTaxonomy: 'Evaluate',
    difficulty: 'Hard',
    question: 'A 68-year-old chronic atrial fibrillation patient stabilized on oral Warfarin sodium 5 mg daily is prescribed Ciprofloxacin 500 mg twice daily for an acute urinary tract infection. What is the most critical pharmacokinetic interaction and clinical danger?',
    options: [
      { key: 'A', text: 'Ciprofloxacin induces CYP2C9, reducing warfarin plasma levels and precipitating stroke' },
      { key: 'B', text: 'Ciprofloxacin inhibits hepatic CYP1A2 and CYP3A4/2C9, markedly increasing INR and bleeding risk' },
      { key: 'C', text: 'Ciprofloxacin causes instant chelation with warfarin in the gastric lumen, preventing drug absorption' },
      { key: 'D', text: 'No significant pharmacokinetic interaction occurs; normal dosage can continue safely' }
    ],
    correctKey: 'B',
    explanation: 'Fluoroquinolones (especially Ciprofloxacin) inhibit cytochrome P450 hepatic enzymes responsible for warfarin metabolism and displace warfarin from serum albumin binding. Additionally, broad-spectrum antibiotics eliminate vitamin K-producing gut flora, synergistically elevating the International Normalized Ratio (INR) and causing major hemorrhagic complications.',
    clinicalKeyPoint: 'The pharmacist must advise close INR monitoring within 48-72 hours, consider dose reduction of warfarin, or recommend an alternative antibiotic without CYP interaction (e.g., Nitrofurantoin if creatinine clearance permits).',
    pciReference: 'PCI D.Pharm ER-2020: Community Pharmacy & Management - Unit VII: Adverse Drug Reactions & Clinical Drug Interactions.'
  },
  {
    id: 'DP-CLIN-021',
    subject: 'Community Pharmacy',
    topic: 'Patient Counseling & Prescription Interpretation',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A patient is dispensed oral Alendronate sodium 70 mg weekly for osteoporosis. What critical counseling direction must the community pharmacist emphasize to prevent severe esophageal ulceration?',
    options: [
      { key: 'A', text: 'Take with milk immediately before lying down to sleep' },
      { key: 'B', text: 'Swallow whole with a full glass of plain water upon waking and remain completely upright for at least 30 minutes' },
      { key: 'C', text: 'Chew the tablet thoroughly after a heavy breakfast' },
      { key: 'D', text: 'Dissolve in fruit juice containing Vitamin C for optimal absorption' }
    ],
    correctKey: 'B',
    explanation: 'Bisphosphonates like Alendronate can cause severe local chemical esophagitis and esophageal erosion if they lodge in the esophagus. Remaining upright (sitting or standing) for 30 minutes with plain water facilitates transit to the stomach.',
    clinicalKeyPoint: 'Calcium and multivalent cations in milk or mineral water chelate bisphosphonates and completely abolish bioavailability.',
    pciReference: 'PCI ER-2020 Community Pharmacy & Management - Patient Counseling.'
  },

  // --- HUMAN ANATOMY & PHYSIOLOGY (MSBTE & PCI ER-2020) ---
  {
    id: 'DP-HAP-022',
    subject: 'Human Anatomy',
    topic: 'Cardiovascular System',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In the cardiac conduction system of the human heart, which specialized myocardial tissue is termed the primary pacemaker due to possessing the highest intrinsic rate of automaticity?',
    options: [
      { key: 'A', text: 'Sinoatrial (SA) Node' },
      { key: 'B', text: 'Atrioventricular (AV) Node' },
      { key: 'C', text: 'Bundle of His' },
      { key: 'D', text: 'Purkinje Fibers' }
    ],
    correctKey: 'A',
    explanation: 'The Sinoatrial (SA) node located in the right atrium near the opening of the superior vena cava possesses the fastest intrinsic depolarization rate (60–100 beats per minute) and sets the normal sinus rhythm.',
    clinicalKeyPoint: 'If the SA node fails, the AV node assumes rhythmicity at an intrinsic rate of 40–60 bpm.',
    pciReference: 'MSBTE D.Pharm HAP / PCI ER-2020 Human Anatomy & Physiology.'
  },
  {
    id: 'DP-HAP-023',
    subject: 'Human Anatomy',
    topic: 'Renal Physiology',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In which functional segment of the human nephron does the maximum percentage (approximately 65% to 70%) of glomerular filtrate, sodium, water, and 100% of filtered glucose reabsorption occur?',
    options: [
      { key: 'A', text: 'Distal Convoluted Tubule (DCT)' },
      { key: 'B', text: 'Proximal Convoluted Tubule (PCT)' },
      { key: 'C', text: 'Loop of Henle' },
      { key: 'D', text: 'Collecting Duct' }
    ],
    correctKey: 'B',
    explanation: 'The Proximal Convoluted Tubule (PCT) has extensive brush border microvilli and reabsorbs ~67% of filtered Na+, Cl-, HCO3-, water, and nearly 100% of glucose and amino acids via secondary active transport.',
    clinicalKeyPoint: 'SGLT2 inhibitors like Dapagliflozin act specifically at the early PCT segment to promote glucosuria in type 2 diabetes.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology - Urinary System.'
  },

  // --- BIOCHEMISTRY & CLINICAL PATHOLOGY (MSBTE & PCI ER-2020) ---
  {
    id: 'DP-BIO-024',
    subject: 'Biochemistry',
    topic: 'Vitamins & Deficiency Disorders',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Deficiency of Thiamine (Vitamin B1) typically manifests in which classical clinical condition characterized by peripheral neuropathy or high-output congestive heart failure?',
    options: [
      { key: 'A', text: 'Pellagra' },
      { key: 'B', text: 'Beri-Beri' },
      { key: 'C', text: 'Scurvy' },
      { key: 'D', text: 'Rickets' }
    ],
    correctKey: 'B',
    explanation: 'Thiamine (B1) deficiency causes Beri-Beri, classified into Dry Beri-Beri (polyneuropathy, muscle wasting) and Wet Beri-Beri (cardiac failure, edema). Pellagra is caused by Vitamin B3 (Niacin) deficiency; Scurvy by Vitamin C; Rickets by Vitamin D.',
    clinicalKeyPoint: 'Wernicke-Korsakoff syndrome is a severe neurological manifestation of thiamine deficiency commonly encountered in chronic alcoholism.',
    pciReference: 'MSBTE / PCI ER-2020 Biochemistry & Clinical Pathology - Vitamins.'
  },
  {
    id: 'DP-BIO-025',
    subject: 'Biochemistry',
    topic: 'Enzymes & Diagnostic Biomarkers',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Medium',
    question: 'Following an acute myocardial infarction (heart attack), which cardiac enzyme biomarker demonstrates the earliest serum elevation within 2 to 4 hours of myocardial tissue ischemia?',
    options: [
      { key: 'A', text: 'Cardiac Troponin I / T and Myoglobin' },
      { key: 'B', text: 'Lactate Dehydrogenase (LDH-1)' },
      { key: 'C', text: 'Alkaline Phosphatase (ALP)' },
      { key: 'D', text: 'Alanine Aminotransferase (ALT)' }
    ],
    correctKey: 'A',
    explanation: 'Myoglobin and cardiac Troponins (cTnI and cTnT) rise within 2 to 4 hours post-infarct. Troponins exhibit exceptional myocardial specificity and remain elevated for 7 to 10 days.',
    clinicalKeyPoint: 'LDH rises late (24–48 hours) and peaks around day 3–4, showing an "LDH flip" (LDH-1 > LDH-2).',
    pciReference: 'PCI ER-2020 Biochemistry - Diagnostic Enzymes.'
  }
];

export const PCI_SUBJECT_SUMMARY = [
  {
    name: 'Pharmaceutics',
    code: 'ER20-11T',
    icon: 'Pill',
    description: 'Formulation science, solid/liquid dosage forms, tablet defects, sterile products & IP packaging standards.',
    questionCount: 38,
    passRate: '86% Pass Rate'
  },
  {
    name: 'Pharmacology',
    code: 'ER20-21T',
    icon: 'Activity',
    description: 'Mechanism of action, drug classifications, adverse reactions, contraindications & emergency antidotes.',
    questionCount: 45,
    passRate: '82% Pass Rate'
  },
  {
    name: 'Pharmacognosy',
    code: 'ER20-13T',
    icon: 'Leaf',
    description: 'Crude drugs, botanical sources, chemical identification tests (Keller-Kiliani, Borntrager), and adulterants.',
    questionCount: 30,
    passRate: '89% Pass Rate'
  },
  {
    name: 'Pharmaceutical Chemistry',
    code: 'ER20-12T',
    icon: 'FlaskConical',
    description: 'SAR, medicinal chemistry structures, IUPAC nomenclature, limit tests (IP), and stability.',
    questionCount: 34,
    passRate: '79% Pass Rate'
  },
  {
    name: 'Pharmacy Law & Ethics',
    code: 'ER20-23T',
    icon: 'Scale',
    description: 'Drugs & Cosmetics Act 1940, Schedules (M, H, X), Pharmacy Act 1948, DPCO & Code of Ethics.',
    questionCount: 36,
    passRate: '91% Pass Rate'
  },
  {
    name: 'Community Pharmacy',
    code: 'ER20-25T',
    icon: 'HeartPulse',
    description: 'Drug-drug interactions, patient counseling, lab data interpretation, therapeutic drug monitoring.',
    questionCount: 28,
    passRate: '84% Pass Rate'
  },
  {
    name: 'Human Anatomy',
    code: 'ER20-14T',
    icon: 'Heart',
    description: 'Cardiovascular system, renal filtration, nervous system, and endocrine organ physiology.',
    questionCount: 25,
    passRate: '88% Pass Rate'
  },
  {
    name: 'Biochemistry',
    code: 'ER20-15T',
    icon: 'Atom',
    description: 'Metabolic pathways, vitamins, enzyme kinetics, deficiency disorders & pathology markers.',
    questionCount: 26,
    passRate: '85% Pass Rate'
  }
];

export const INITIAL_TEAMS: Team[] = [
  {
    id: 'team-alpha',
    name: 'Team Galen (Pharma Titans)',
    college: 'Government College of Pharmacy',
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
