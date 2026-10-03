import { Question, Team } from '../types/quiz';

export const DPHARM_QUESTIONS: Question[] = [
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
      { key: 'D', text: 'Van Urk\'s Test' },
    ],
    correctKey: 'B',
    explanation: 'Keller-Kiliani test is specific for 2-deoxysugars (digitoxose) found in cardiac glycosides. The plant extract is treated with glacial acetic acid containing a trace of ferric chloride, followed by concentrated sulfuric acid, producing a reddish-brown ring at the junction and a bluish-green upper acetic acid layer.',
    clinicalKeyPoint: 'Borntrager test detects anthraquinone glycosides (Senna), Shinoda test detects flavonoids, and Van Urk test detects Ergot alkaloids.',
    pciReference: 'PCI D.Pharm ER-2020: Pharmacognosy (Theory) - Unit IV: Cardiac Glycosides & Isolation.'
  },
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
    id: 'DP-CLIN-006',
    subject: 'Clinical Pharmacy',
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
    name: 'Clinical Pharmacy',
    code: 'ER20-25T',
    icon: 'HeartPulse',
    description: 'Drug-drug interactions, patient counseling, lab data interpretation, therapeutic drug monitoring.',
    questionCount: 28,
    passRate: '84% Pass Rate'
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
