import { Question, Team } from '../types/quiz';

export const DPHARM_QUESTIONS: Question[] = [
  // =========================================================================
  // BATCH A: PHARMACOLOGY & TOXICOLOGY (DRUG INSPECTOR & PCI EXIT EXAM CORE)
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
    topic: 'Chemotherapy & Tetracyclines',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'Why are tetracycline antibiotics strictly contraindicated in pregnant women and children under 8 years of age?',
    options: [
      { key: 'A', text: 'They cause severe aplastic anemia' },
      { key: 'B', text: 'They chelate calcium and deposit in developing teeth and bones, causing enamel hypoplasia and brown discoloration' },
      { key: 'C', text: 'They induce acute rupture of the Achilles tendon' },
      { key: 'D', text: 'They cause fatal gray baby syndrome' }
    ],
    correctKey: 'B',
    explanation: 'Tetracyclines chelate calcium orthophosphate and deposit in growing bones and deciduous/permanent teeth, causing permanent yellow-brown discoloration and enamel hypoplasia.',
    clinicalKeyPoint: 'Gray baby syndrome is caused by chloramphenicol; tendon rupture is associated with fluoroquinolones.',
    pciReference: 'MSBTE Pharmacology: Antibacterial Chemotherapy.'
  },
  {
    id: 'DP-PCOL-007',
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
    explanation: 'Protamine sulfate is a strongly basic polycationic protein that forms an inactive stable salt complex with strongly acidic polyanionic heparin through ionic neutralization.',
    clinicalKeyPoint: '1 mg of protamine sulfate neutralizes approximately 100 USP units of unfractionated heparin.',
    pciReference: 'UPSC Drug Inspector / PCI ER-2020: Drugs Acting on Blood & Hematinics.'
  },
  {
    id: 'DP-PCOL-008',
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
    explanation: 'Metformin activates hepatic AMPK, reducing gluconeogenesis and glycogenolysis while improving peripheral insulin sensitivity. Because it inhibits mitochondrial complex I, lactate accumulation can trigger fatal lactic acidosis in severe renal impairment.',
    clinicalKeyPoint: 'Withhold metformin when estimated glomerular filtration rate (eGFR) falls below 30 mL/min/1.73m².',
    pciReference: 'PCI ER-2020 Pharmacology: Hormones & Oral Hypoglycemic Agents.'
  },
  {
    id: 'DP-PCOL-009',
    subject: 'Pharmacology',
    topic: 'Opioid Toxicology & Overdose',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'A comatose patient arrives with pinpoint pupils (miosis), respiratory depression (4 breaths/min), and cyanosis following morphine injection. What is the pure opioid receptor antagonist of choice?',
    options: [
      { key: 'A', text: 'Naloxone' },
      { key: 'B', text: 'Methadone' },
      { key: 'C', text: 'Buprenorphine' },
      { key: 'D', text: 'Pentazocine' }
    ],
    correctKey: 'A',
    explanation: 'Naloxone is a pure competitive opioid receptor antagonist acting on mu, kappa, and delta receptors, rapidly reversing opioid-induced respiratory depression and coma within 1–2 minutes.',
    clinicalKeyPoint: 'Naloxone has a shorter half-life (60–90 min) than morphine; repeated doses may be required to prevent renarcotization.',
    pciReference: 'MSBTE D.Pharm Pharmacology: CNS Depressants & Opioid Analgesics.'
  },
  {
    id: 'DP-PCOL-010',
    subject: 'Pharmacology',
    topic: 'Cardioactive Glycosides & Digoxin',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'Digoxin enhances myocardial contractility by inhibiting the sarcolemmal Na+/K+-ATPase pump. Which electrolyte disturbance significantly potentiates digoxin toxicity and triggers fatal cardiac arrhythmias?',
    options: [
      { key: 'A', text: 'Hyperkalemia' },
      { key: 'B', text: 'Hypokalemia' },
      { key: 'C', text: 'Hyponatremia' },
      { key: 'D', text: 'Hypercalcemia reduction' }
    ],
    correctKey: 'B',
    explanation: 'Potassium and digoxin compete for the same binding site on extracellular Na+/K+-ATPase. Hypokalemia increases digoxin binding to the enzyme, markedly exacerbating myocardial toxicity and predisposing to ventricular arrhythmias.',
    clinicalKeyPoint: 'Co-administration of loop or thiazide diuretics without potassium sparing or supplementation frequently precipitates digoxin toxicity.',
    pciReference: 'PCI ER-2020 Pharmacology: Congestive Heart Failure Drugs.'
  },
  {
    id: 'DP-PCOL-011',
    subject: 'Pharmacology',
    topic: 'Antiplatelet Agents & Aspirin',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Low-dose Aspirin (75–150 mg/day) exerts its irreversible cardioprotective antiplatelet effect by covalently acetylating which specific enzyme in platelets?',
    options: [
      { key: 'A', text: 'Cyclooxygenase-1 (COX-1), blocking Thromboxane A2 synthesis' },
      { key: 'B', text: 'Cyclooxygenase-2 (COX-2), blocking Prostacyclin synthesis' },
      { key: 'C', text: 'Phosphodiesterase-3 (PDE3)' },
      { key: 'D', text: 'Glycoprotein IIb/IIIa receptor complex' }
    ],
    correctKey: 'A',
    explanation: 'Aspirin irreversibly acetylates Ser-529 of platelet COX-1, preventing Arachidonic Acid conversion into Thromboxane A2 (a potent platelet aggregator and vasoconstrictor) for the entire 7–10 day lifespan of the anucleate platelet.',
    clinicalKeyPoint: 'Endothelial cells synthesize new COX-1/COX-2 to produce protective Prostacyclin (PGI2), explaining low-dose selectivity.',
    pciReference: 'UPSC Drug Inspector / PCI ER-2020: Antiplatelet & Antithrombotic Agents.'
  },
  {
    id: 'DP-PCOL-012',
    subject: 'Pharmacology',
    topic: 'Antimalarial Pharmacology & G6PD Deficiency',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'Primaquine is administered for the radical cure of relapsing vivax malaria by destroying hypnozoites. In patients with glucose-6-phosphate dehydrogenase (G6PD) deficiency, what severe adverse reaction can occur?',
    options: [
      { key: 'A', text: 'Acute intravascular hemolytic anemia' },
      { key: 'B', text: 'Agranulocytosis' },
      { key: 'C', text: 'Irreversible pulmonary fibrosis' },
      { key: 'D', text: 'Nephrotic syndrome' }
    ],
    correctKey: 'A',
    explanation: 'G6PD generates NADPH, required to maintain reduced glutathione (GSH) in red blood cells. Primaquine metabolite oxidation overwhelms deficient RBC defenses, causing oxidative stress, Heinz body formation, and severe acute intravascular hemolysis.',
    clinicalKeyPoint: 'G6PD testing is mandatory before starting primaquine therapy in endemic populations.',
    pciReference: 'PCI ER-2020 Pharmacology: Antimalarial Chemotherapy.'
  },
  {
    id: 'DP-PCOL-013',
    subject: 'Pharmacology',
    topic: 'Diuretics & Ototoxicity',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Which high-ceiling loop diuretic inhibits the Na+/K+/2Cl- cotransporter in the thick ascending limb of Henle and carries a notable risk of ototoxicity when combined with aminoglycosides?',
    options: [
      { key: 'A', text: 'Furosemide' },
      { key: 'B', text: 'Hydrochlorothiazide' },
      { key: 'C', text: 'Spironolactone' },
      { key: 'D', text: 'Amiloride' }
    ],
    correctKey: 'A',
    explanation: 'Furosemide inhibits the Na+/K+/2Cl- symporter. It can alter endolymph electrolyte composition in the stria vascularis of the inner ear, leading to tinnitus, hearing loss, and ototoxicity—synergistically compounded by aminoglycosides (e.g., Gentamicin).',
    clinicalKeyPoint: 'Administer slow IV injections (not exceeding 4 mg/min) to prevent sudden peak-concentration ototoxicity.',
    pciReference: 'MSBTE D.Pharm Pharmacology: Diuretics.'
  },
  {
    id: 'DP-PCOL-014',
    subject: 'Pharmacology',
    topic: 'Antiparkinsonian Drugs & Levodopa',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Why is Levodopa formulated in combination with Carbidopa in the treatment of Parkinson\'s disease?',
    options: [
      { key: 'A', text: 'Carbidopa inhibits peripheral DOPA decarboxylase, increasing levodopa brain delivery and reducing nausea' },
      { key: 'B', text: 'Carbidopa crosses the blood-brain barrier to directly stimulate D2 dopamine receptors' },
      { key: 'C', text: 'Carbidopa prevents central metabolism of dopamine by MAO-B' },
      { key: 'D', text: 'Carbidopa blocks central cholinergic muscarinic hyperactivity' }
    ],
    correctKey: 'A',
    explanation: 'Dopamine cannot cross the blood-brain barrier, while Levodopa can. Carbidopa is a peripheral DOPA decarboxylase inhibitor that does not penetrate the blood-brain barrier, preventing peripheral conversion of levodopa to dopamine and reducing nausea, vomiting, and tachycardia.',
    clinicalKeyPoint: 'Co-administration reduces the required therapeutic dose of Levodopa by approximately 75%.',
    pciReference: 'PCI ER-2020 Pharmacology: Drugs for Neurodegenerative Disorders.'
  },
  {
    id: 'DP-PCOL-015',
    subject: 'Pharmacology',
    topic: 'Heavy Metal Poisoning & Chelation',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'Which heavy metal chelating agent is the specific drug of choice for acute lead (Pb) poisoning, administered as a calcium disodium salt to prevent hypocalcemia?',
    options: [
      { key: 'A', text: 'Calcium Disodium Edetate (CaNa2-EDTA)' },
      { key: 'B', text: 'Deferoxamine' },
      { key: 'C', text: 'Penicillamine' },
      { key: 'D', text: 'Dimercaprol (BAL)' }
    ],
    correctKey: 'A',
    explanation: 'CaNa2-EDTA exchanges its calcium ion for lead because lead has a higher binding affinity for EDTA, forming a non-toxic water-soluble chelate excreted in urine.',
    clinicalKeyPoint: 'Free Na2-EDTA must never be used because it chelates serum calcium, causing severe tetany and death.',
    pciReference: 'UPSC Drug Inspector / MSBTE: Toxicology & Heavy Metal Antidotes.'
  },
  {
    id: 'DP-PCOL-016',
    subject: 'Pharmacology',
    topic: 'Benzodiazepine Toxicity & Antidote',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'A patient presents with stupor and hypoventilation following an intentional overdose of Alprazolam and Diazepam. What specific competitive benzodiazepine antagonist is administered intravenously?',
    options: [
      { key: 'A', text: 'Flumazenil' },
      { key: 'B', text: 'Naloxone' },
      { key: 'C', text: 'Physostigmine' },
      { key: 'D', text: 'Doxapram' }
    ],
    correctKey: 'A',
    explanation: 'Flumazenil is an imidazobenzodiazepine derivative that competitively blocks the benzodiazepine binding site on the GABA-A receptor, reversing benzodiazepine-induced sedation and respiratory depression.',
    clinicalKeyPoint: 'Caution: In chronic benzodiazepine users, rapid administration can precipitate acute withdrawal seizures.',
    pciReference: 'PCI ER-2020 Pharmacology: Sedatives, Hypnotics & Toxicology.'
  },

  // ==========================================
  // PHARMACEUTICS (MSBTE & PCI ER-2020)
  // ==========================================
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
    topic: 'Emulsions & Physical Stability',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'When an emulsion exhibits an upward or downward movement of dispersed globules forming a concentrated layer that is readily redispersed upon gentle shaking, this instability is termed:',
    options: [
      { key: 'A', text: 'Cracking (Breaking)' },
      { key: 'B', text: 'Creaming' },
      { key: 'C', text: 'Phase Inversion' },
      { key: 'D', text: 'Coalescence' }
    ],
    correctKey: 'B',
    explanation: 'Creaming is a reversible process governed by Stokes\' Law where droplets concentrate at the top or bottom due to density differences.',
    clinicalKeyPoint: 'Cracking is irreversible destruction of the surfactant interfacial film.',
    pciReference: 'MSBTE Pharmaceutics: Biphasic Liquid Dosage Forms.'
  },
  {
    id: 'DP-PHARM-005',
    subject: 'Pharmaceutics',
    topic: 'Ointments & Suppository Bases',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Theobroma oil (Cocoa Butter) is an ideal suppository base, but overheating above 36°C causes polymorphic transformation to which unstable low-melting form?',
    options: [
      { key: 'A', text: 'Alpha (α) form, melting at 24°C' },
      { key: 'B', text: 'Beta (β) stable form, melting at 34–35°C' },
      { key: 'C', text: 'Gamma (γ) form, melting at 18°C' },
      { key: 'D', text: 'Delta (δ) form, melting at 42°C' }
    ],
    correctKey: 'C',
    explanation: 'Cocoa butter exhibits polymorphism. Gentle melting yields the stable beta form (m.p. 34–35°C). Overheating produces unstable gamma (18°C) or alpha (24°C) forms that fail to solidify at room temperature.',
    clinicalKeyPoint: 'Always melt cocoa butter over a warm water bath rather than direct flame.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Semisolid Dosage Forms & Suppositories.'
  },
  {
    id: 'DP-PHARM-006',
    subject: 'Pharmaceutics',
    topic: 'Filtration & HEPA Specifications',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In aseptic laminar airflow workbenches, High-Efficiency Particulate Air (HEPA) filters are certified to remove at least 99.97% of airborne particles down to what pore size?',
    options: [
      { key: 'A', text: '5.0 microns' },
      { key: 'B', text: '0.3 microns' },
      { key: 'C', text: '0.01 microns' },
      { key: 'D', text: '10 microns' }
    ],
    correctKey: 'B',
    explanation: 'HEPA filters trap particles ≥0.3 µm with an efficiency of 99.97%, removing airborne bacteria, mold spores, and particulate debris.',
    clinicalKeyPoint: 'Validated periodically using the DOP aerosol smoke test.',
    pciReference: 'MSBTE Pharmaceutics: Sterile Manufacturing Facilities.'
  },

  // ==========================================
  // PHARMACOGNOSY (MSBTE & PCI ER-2020)
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
    topic: 'Alkaloid Identification Reagents',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Dragendorff\'s reagent, widely used for general qualitative detection of alkaloids in crude plant extracts, chemically consists of:',
    options: [
      { key: 'A', text: 'Potassium bismuth iodide solution' },
      { key: 'B', text: 'Potassium mercuric iodide solution (Mayer\'s reagent)' },
      { key: 'C', text: 'Iodine in potassium iodide solution (Wagner\'s reagent)' },
      { key: 'D', text: 'Saturated picric acid solution (Hager\'s reagent)' }
    ],
    correctKey: 'A',
    explanation: 'Dragendorff\'s reagent is potassium bismuth iodide, producing an orange or reddish-brown precipitate with alkaloids.',
    clinicalKeyPoint: 'Mayer\'s reagent gives cream precipitate; Wagner\'s gives reddish-brown; Hager\'s gives yellow crystals.',
    pciReference: 'MSBTE Pharmacognosy: General Chemical Tests of Alkaloids.'
  },
  {
    id: 'DP-COG-003',
    subject: 'Pharmacognosy',
    topic: 'Anthraquinone Glycosides & Senna',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Senna leaves (Cassia angustifolia) contain sennosides A and B. Which chemical test confirms anthraquinone glycosides via a characteristic rose-pink color in the ammoniacal layer?',
    options: [
      { key: 'A', text: 'Borntrager\'s test' },
      { key: 'B', text: 'Vitali-Morin test' },
      { key: 'C', text: 'Legal test' },
      { key: 'D', text: 'Murexide test' }
    ],
    correctKey: 'A',
    explanation: 'In Borntrager\'s test, hydrolyzing anthraquinones with dilute acid followed by extraction into benzene/ether and shaking with ammonia yields a rose-pink color in the upper ammoniacal phase.',
    clinicalKeyPoint: 'Modified Borntrager\'s test (with FeCl3) is required for C-glycosides like Aloin.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Laxative Crude Drugs.'
  },
  {
    id: 'DP-COG-004',
    subject: 'Pharmacognosy',
    topic: 'Tropane Alkaloids & Belladonna',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Which chemical test gives a bright violet color when tropane alkaloids (such as Atropine and Hyoscyamine from Datura or Belladonna) are treated with fuming nitric acid followed by methanolic KOH?',
    options: [
      { key: 'A', text: 'Vitali-Morin test' },
      { key: 'B', text: 'Thalleioquin test' },
      { key: 'C', text: 'Froehde\'s test' },
      { key: 'D', text: 'Biuret test' }
    ],
    correctKey: 'A',
    explanation: 'The Vitali-Morin reaction is specific for tropane alkaloids: fuming nitric acid evaporation followed by acetone and alcoholic KOH produces a bright violet coloration that fades to red.',
    clinicalKeyPoint: 'Thalleioquin test is specific for Cinchona alkaloids (Quinine), yielding an emerald green color.',
    pciReference: 'MSBTE Pharmacognosy: Tropane Alkaloids.'
  },
  {
    id: 'DP-COG-005',
    subject: 'Pharmacognosy',
    topic: 'Volatile Oils & Clove',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'Clove buds (Syzygium aromaticum) contain eugenol as their primary active constituent. What microscopic structure is characteristic of clove powder under a compound microscope?',
    options: [
      { key: 'A', text: 'Schizolysigenous oil glands and pollen grains in tetrahedral tetrads' },
      { key: 'B', text: 'Wavy walled epidermal cells with paracytic stomata' },
      { key: 'C', text: 'Cluster crystals of calcium oxalate in phloem parenchyma only' },
      { key: 'D', text: 'Lignified non-glandular warty trichomes' }
    ],
    correctKey: 'A',
    explanation: 'Clove is characterized microscopically by large schizolysigenous oil cavities, biconvex triangular pollen grains (15–20 µm), and absence of starch grains.',
    clinicalKeyPoint: 'Eugenol forms needle-shaped potassium eugenote crystals when treated with 5% KOH solution.',
    pciReference: 'MSBTE Pharmacognosy: Volatile Oils & Spices.'
  },

  // ==========================================
  // PHARMACEUTICAL CHEMISTRY (MSBTE & PCI ER-2020)
  // ==========================================
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
    topic: 'Limit Test for Arsenic',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In the standard Gutzeit apparatus used for the IP Limit Test for Arsenic, which test paper is positioned at the top of the tube to produce a yellow-brown stain?',
    options: [
      { key: 'A', text: 'Mercuric chloride paper' },
      { key: 'B', text: 'Lead acetate cotton plug' },
      { key: 'C', text: 'Silver nitrate paper' },
      { key: 'D', text: 'Phenolphthalein paper' }
    ],
    correctKey: 'A',
    explanation: 'Arsenic is converted into arsine gas (AsH3) by nascent hydrogen, which reacts with mercuric chloride paper to form a yellow-brown complex. The lead acetate cotton plug traps interfering H2S gas.',
    clinicalKeyPoint: 'Stain length and intensity are compared with a standard arsenic solution (10 ppm).',
    pciReference: 'MSBTE D.Pharm Chemistry: Limit Tests.'
  },
  {
    id: 'DP-CHEM-004',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antitubercular Agents & Isoniazid',
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
    explanation: 'Isoniazid combines with pyridoxal phosphate to form inactive hydrazones, promoting renal excretion of vitamin B6 and precipitating peripheral neuropathy. Giving 10–25 mg daily of Vitamin B6 prevents this toxicity.',
    clinicalKeyPoint: 'Mandatory in diabetic and malnourished patients undergoing DOTS therapy.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Anti-tubercular Drugs.'
  },
  {
    id: 'DP-CHEM-005',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Diuretics & Carbonic Anhydrase Inhibitors',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Acetazolamide is a heterocyclic sulfonamide derivative. Which enzyme does it non-competitively inhibit in the renal proximal convoluted tubule to induce alkaline diuresis?',
    options: [
      { key: 'A', text: 'Carbonic Anhydrase' },
      { key: 'B', text: 'Xanthine Oxidase' },
      { key: 'C', text: 'HMG-CoA Reductase' },
      { key: 'D', text: 'Dopa Decarboxylase' }
    ],
    correctKey: 'A',
    explanation: 'Acetazolamide inhibits carbonic anhydrase, blocking H+ and HCO3- formation in proximal tubule cells and increasing excretion of sodium, bicarbonate, and water.',
    clinicalKeyPoint: 'Main clinical indication today is reducing intraocular pressure in open-angle glaucoma.',
    pciReference: 'MSBTE Pharmaceutical Chemistry: Diuretics.'
  },

  // ==========================================
  // PHARMACY LAW & ETHICS (MSBTE & PCI ER-2020)
  // ==========================================
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
  {
    id: 'DP-LAW-004',
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
    explanation: 'Schedule FF details regulatory standards for ophthalmic preparations (sterility, particulate limits, packaging). Schedule G covers drugs taken under medical supervision; Schedule J lists incurable diseases; Schedule Y details clinical trials.',
    clinicalKeyPoint: 'Schedule FF mandates that eye drops remain sterile until opening and contain approved antimicrobial preservatives.',
    pciReference: 'MSBTE Pharmacy Law: Drug Schedules.'
  },
  {
    id: 'DP-LAW-005',
    subject: 'Pharmacy Law & Ethics',
    topic: 'Narcotic Drugs & Psychotropic Substances (NDPS) Act',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'In what year was the Narcotic Drugs and Psychotropic Substances (NDPS) Act enacted by the Parliament of India?',
    options: [
      { key: 'A', text: '1940' },
      { key: 'B', text: '1971' },
      { key: 'C', text: '1985' },
      { key: 'D', text: '1995' }
    ],
    correctKey: 'C',
    explanation: 'The NDPS Act was enacted in 1985 to consolidate and amend laws relating to narcotic drugs and psychotropic substances, imposing stringent provisions for control and forfeiture of illicit drug assets.',
    clinicalKeyPoint: 'Administered at the central level by the Narcotics Control Bureau (NCB).',
    pciReference: 'PCI ER-2020 Pharmacy Law & Ethics: NDPS Act 1985.'
  },

  // ==========================================
  // COMMUNITY & CLINICAL PHARMACY (MSBTE & PCI ER-2020)
  // ==========================================
  {
    id: 'DP-COMM-001',
    subject: 'Community Pharmacy',
    topic: 'Drug-Drug Interactions & Anticoagulants',
    bloomTaxonomy: 'Evaluate',
    difficulty: 'Hard',
    question: 'A 68-year-old patient on Warfarin 5 mg daily is prescribed Ciprofloxacin 500 mg twice daily for a urinary tract infection. What is the most critical interaction risk?',
    options: [
      { key: 'A', text: 'Ciprofloxacin induces CYP2C9, reducing warfarin levels and risking stroke' },
      { key: 'B', text: 'Ciprofloxacin inhibits CYP enzymes and reduces gut vitamin K synthesis, markedly elevating INR and bleeding risk' },
      { key: 'C', text: 'Ciprofloxacin chelates with warfarin in the stomach, blocking absorption' },
      { key: 'D', text: 'No significant pharmacokinetic interaction occurs' }
    ],
    correctKey: 'B',
    explanation: 'Ciprofloxacin inhibits cytochrome P450 enzymes that metabolize warfarin and depletes vitamin K-producing gut flora, synergistically elevating the INR and increasing major bleeding risk.',
    clinicalKeyPoint: 'Monitor INR closely within 48–72 hours or substitute an antibiotic without CYP interaction (e.g., Nitrofurantoin).',
    pciReference: 'PCI ER-2020 Community Pharmacy: Adverse Drug Reactions & Interactions.'
  },
  {
    id: 'DP-COMM-002',
    subject: 'Community Pharmacy',
    topic: 'Patient Counseling & Administration',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A patient is dispensed oral Alendronate sodium 70 mg weekly for osteoporosis. What counseling instruction must the pharmacist emphasize to prevent esophageal ulceration?',
    options: [
      { key: 'A', text: 'Take with milk immediately before going to sleep' },
      { key: 'B', text: 'Swallow whole with a full glass of plain water upon waking and remain upright for at least 30 minutes' },
      { key: 'C', text: 'Chew the tablet thoroughly after a meal' },
      { key: 'D', text: 'Dissolve in fruit juice containing Vitamin C' }
    ],
    correctKey: 'B',
    explanation: 'Bisphosphonates cause chemical esophagitis if retained in the esophagus. Taking with a full glass of water and remaining upright for 30 minutes ensures rapid transit into the stomach.',
    clinicalKeyPoint: 'Calcium in milk or mineral water chelates bisphosphonates, abolishing bioavailability.',
    pciReference: 'PCI ER-2020 Community Pharmacy: Patient Counseling.'
  },
  {
    id: 'DP-COMM-003',
    subject: 'Community Pharmacy',
    topic: 'Vaccine Storage & Cold Chain',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'According to cold chain guidelines for community pharmacy refrigerators, what is the mandatory storage temperature range for vaccines and biologicals (e.g., Insulin, Tetanus Toxoid, Hepatitis B)?',
    options: [
      { key: 'A', text: '-20°C to -10°C' },
      { key: 'B', text: '+2°C to +8°C' },
      { key: 'C', text: '+15°C to +25°C' },
      { key: 'D', text: '0°C exactly with ice packs touching the vials' }
    ],
    correctKey: 'B',
    explanation: 'The cold chain temperature range is +2°C to +8°C. Freezing (below 0°C) denatures protein antigens in adsorbable vaccines like Tetanus Toxoid and DPT.',
    clinicalKeyPoint: 'Store vaccines on central refrigerator shelves, never in door compartments where temperature fluctuates.',
    pciReference: 'MSBTE Community Pharmacy: Storage & Cold Chain Management.'
  },
  {
    id: 'DP-COMM-004',
    subject: 'Community Pharmacy',
    topic: 'Prescription Parts & Latin Abbreviations',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'On an Indian prescription slip, which section contains the designation "Rx" representing an invocation to Jupiter or God of healing?',
    options: [
      { key: 'A', text: 'Inscription' },
      { key: 'B', text: 'Superscription' },
      { key: 'C', text: 'Subscription' },
      { key: 'D', text: 'Signatura' }
    ],
    correctKey: 'B',
    explanation: 'Superscription consists of the symbol "Rx" (Take thou). Inscription lists names and quantities of prescribed drugs; Subscription contains directions to the pharmacist; Signatura contains instructions for the patient.',
    clinicalKeyPoint: 'Latin abbreviation "p.r.n." means pro re nata (as needed/when required).',
    pciReference: 'MSBTE Community Pharmacy: Parts of Prescription.'
  },

  // ==========================================
  // HUMAN ANATOMY & PHYSIOLOGY (MSBTE & PCI ER-2020)
  // ==========================================
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
    topic: 'Renal Nephron Physiology',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In which functional segment of the human nephron does the maximum proportion (~65% to 70%) of glomerular filtrate, sodium, water, and 100% of filtered glucose reabsorption occur?',
    options: [
      { key: 'A', text: 'Distal Convoluted Tubule (DCT)' },
      { key: 'B', text: 'Proximal Convoluted Tubule (PCT)' },
      { key: 'C', text: 'Loop of Henle' },
      { key: 'D', text: 'Collecting Duct' }
    ],
    correctKey: 'B',
    explanation: 'The PCT has extensive brush border microvilli and reabsorbs ~67% of filtered electrolytes and water, and 100% of filtered glucose and amino acids.',
    clinicalKeyPoint: 'SGLT2 inhibitors like Dapagliflozin act specifically at the early PCT to block glucose reabsorption.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Urinary System.'
  },
  {
    id: 'DP-HAP-003',
    subject: 'Human Anatomy',
    topic: 'Endocrine System & Adrenal Gland',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which anatomical zone of the adrenal cortex synthesizes and secretes mineralocorticoids, primarily Aldosterone?',
    options: [
      { key: 'A', text: 'Zona Glomerulosa' },
      { key: 'B', text: 'Zona Fasciculata' },
      { key: 'C', text: 'Zona Reticularis' },
      { key: 'D', text: 'Adrenal Medulla' }
    ],
    correctKey: 'A',
    explanation: 'Adrenal cortex zones: Zona Glomerulosa secretes mineralocorticoids (aldosterone); Zona Fasciculata secretes glucocorticoids (cortisol); Zona Reticularis secretes androgens. The medulla secretes catecholamines.',
    clinicalKeyPoint: 'Mnemonic: "GFR" corresponds to "Salt, Sugar, Sex".',
    pciReference: 'MSBTE HAP: Endocrine Glands.'
  },
  {
    id: 'DP-HAP-004',
    subject: 'Human Anatomy',
    topic: 'Blood & Hematology',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which granular leukocyte represents the largest percentage (50% to 70%) of total circulating white blood cells and acts as the primary first responder in acute bacterial infections?',
    options: [
      { key: 'A', text: 'Neutrophils' },
      { key: 'B', text: 'Eosinophils' },
      { key: 'C', text: 'Basophils' },
      { key: 'D', text: 'Monocytes' }
    ],
    correctKey: 'A',
    explanation: 'Neutrophils are the most abundant circulating leukocytes (50%–70%) and phagocytose bacteria during acute inflammatory responses.',
    clinicalKeyPoint: 'Elevated neutrophil count (neutrophilia) with "shift to the left" indicates acute bacterial infection.',
    pciReference: 'PCI ER-2020 HAP: Blood Components & Functions.'
  },

  // ==========================================
  // BIOCHEMISTRY & CLINICAL PATHOLOGY (MSBTE & PCI ER-2020)
  // ==========================================
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
    topic: 'Diagnostic Enzymes & Biomarkers',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Medium',
    question: 'Following an acute myocardial infarction, which serum cardiac biomarker demonstrates the earliest elevation within 2 to 4 hours of myocardial ischemia?',
    options: [
      { key: 'A', text: 'Cardiac Troponin I / T and Myoglobin' },
      { key: 'B', text: 'Lactate Dehydrogenase (LDH-1)' },
      { key: 'C', text: 'Alkaline Phosphatase (ALP)' },
      { key: 'D', text: 'Alanine Aminotransferase (ALT)' }
    ],
    correctKey: 'A',
    explanation: 'Myoglobin and cardiac Troponins (cTnI and cTnT) rise within 2–4 hours post-infarct. Troponins offer high cardiac specificity and remain elevated for 7–10 days.',
    clinicalKeyPoint: 'LDH rises late (24–48 hours) with an "LDH-1 > LDH-2 flip" peaking around day 3.',
    pciReference: 'PCI ER-2020 Biochemistry: Diagnostic Enzymes.'
  },
  {
    id: 'DP-BIO-003',
    subject: 'Biochemistry',
    topic: 'Carbohydrate Metabolism & Diabetes',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which rate-limiting committed enzyme catalyzes the conversion of Fructose-6-phosphate to Fructose-1,6-bisphosphate in the glycolytic pathway (Embden-Meyerhof pathway)?',
    options: [
      { key: 'A', text: 'Phosphofructokinase-1 (PFK-1)' },
      { key: 'B', text: 'Hexokinase' },
      { key: 'C', text: 'Pyruvate Kinase' },
      { key: 'D', text: 'Aldolase' }
    ],
    correctKey: 'A',
    explanation: 'Phosphofructokinase-1 (PFK-1) catalyzes the rate-limiting committed step of glycolysis, allosterically activated by AMP and Fructose-2,6-bisphosphate, and inhibited by ATP and citrate.',
    clinicalKeyPoint: 'HbA1c reflects average blood glucose levels over the preceding 90–120 days.',
    pciReference: 'MSBTE Biochemistry: Carbohydrate Metabolism.'
  },
  {
    id: 'DP-BIO-004',
    subject: 'Biochemistry',
    topic: 'Lipid Metabolism & Ketone Bodies',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In uncontrolled diabetic ketoacidosis (DKA), which compound is synthesized in hepatic mitochondria as a ketone body but cannot be utilized by peripheral tissues because it is spontaneously decarboxylated and exhaled?',
    options: [
      { key: 'A', text: 'Acetone' },
      { key: 'B', text: 'Acetoacetate' },
      { key: 'C', text: 'Beta-hydroxybutyrate' },
      { key: 'D', text: 'Oxaloacetate' }
    ],
    correctKey: 'A',
    explanation: 'The three ketone bodies are acetoacetate, beta-hydroxybutyrate, and acetone. Acetone is a volatile metabolic dead-end produced by non-enzymatic decarboxylation of acetoacetate, excreted via breath (fruity odor).',
    clinicalKeyPoint: 'Rothera\'s test (sodium nitroprusside in ammonia) detects acetoacetate and acetone in urine.',
    pciReference: 'MSBTE Biochemistry: Lipid Metabolism & Urine Analysis.'
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
    name: 'Pharmacognosy',
    code: 'ER20-13T',
    icon: 'Leaf',
    description: 'Crude drugs, botanical sources, chemical identification tests (Keller-Kiliani, Borntrager), and adulterants.',
    questionCount: 40,
    passRate: '89% Pass Rate'
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
    name: 'Pharmacy Law & Ethics',
    code: 'ER20-23T',
    icon: 'Scale',
    description: 'Drugs & Cosmetics Act 1940, Schedules (M, H, X), Pharmacy Act 1948, DPCO & Code of Ethics.',
    questionCount: 38,
    passRate: '91% Pass Rate'
  },
  {
    name: 'Community Pharmacy',
    code: 'ER20-25T',
    icon: 'HeartPulse',
    description: 'Drug-drug interactions, patient counseling, lab data interpretation, cold chain logistics.',
    questionCount: 35,
    passRate: '84% Pass Rate'
  },
  {
    name: 'Human Anatomy',
    code: 'ER20-14T',
    icon: 'Heart',
    description: 'Cardiovascular system, renal filtration, nervous system, and endocrine organ physiology.',
    questionCount: 32,
    passRate: '88% Pass Rate'
  },
  {
    name: 'Biochemistry',
    code: 'ER20-15T',
    icon: 'Atom',
    description: 'Metabolic pathways, vitamins, enzyme kinetics, deficiency disorders & pathology markers.',
    questionCount: 30,
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
