import { Question, Team } from '../types/quiz';

export const DPHARM_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. PHARMACEUTICS (ER20-11T) - 20 QUESTIONS
  // =========================================================================
  {
    id: 'DP-PHARM-001',
    subject: 'Pharmaceutics',
    topic: 'History of Pharmacy Profession',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In which year and institution was the first 3-year Bachelor of Pharmacy (B.Pharm) degree program established in India under Professor Mahadeva Lal Schroff?',
    options: [
      { key: 'A', text: '1842 at Escola Médica de Goa' },
      { key: 'B', text: '1937 at Banaras Hindu University (BHU)' },
      { key: 'C', text: '1948 at Bombay College of Pharmacy' },
      { key: 'D', text: '1901 at Bengal Chemicals, Calcutta' }
    ],
    correctKey: 'B',
    explanation: 'The Department of Pharmaceutics at BHU was established in 1932 by Prof. M. L. Schroff, and the official 3-year B.Pharm degree began in 1937[cite: 8].',
    clinicalKeyPoint: 'March 6th is celebrated annually as National Pharmacy Education Day in honour of Prof. M. L. Schroff[cite: 8, 26].',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): History of Profession of Pharmacy[cite: 5, 8].'
  },
  {
    id: 'DP-PHARM-002',
    subject: 'Pharmaceutics',
    topic: 'Packaging Materials Science',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which type of glass container is composed of treated soda-lime glass de-alkalized with sulfur dioxide fumes at high temperatures, suitable for buffered aqueous injections?',
    options: [
      { key: 'A', text: 'Type I (Highly resistant borosilicate glass)' },
      { key: 'B', text: 'Type II (Treated de-alkalized soda-lime glass)' },
      { key: 'C', text: 'Type III (Regular soda-lime glass)' },
      { key: 'D', text: 'Type IV / NP (General-purpose non-parenteral glass)' }
    ],
    correctKey: 'B',
    explanation: 'Type II glass is treated soda-lime glass exposed to SO2 fumes at high temperatures, neutralizing surface alkali for use with buffered solutions below pH 7.',
    clinicalKeyPoint: 'Type I borosilicate glass is required for unbuffered parenteral formulations.',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Packaging Materials[cite: 5, 9].'
  },
  {
    id: 'DP-PHARM-003',
    subject: 'Pharmaceutics',
    topic: 'Size Reduction Equipment',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'In an industrial ball mill operated at its optimal critical speed (60% to 85%), which movement trajectory occurs where balls fall parabolically onto the powder bed?',
    options: [
      { key: 'A', text: 'Cascading (rolling and jumping at low speed where attrition predominates)' },
      { key: 'B', text: 'Cataracting (balls thrown from the top to impact the material at the bottom)' },
      { key: 'C', text: 'Centrifuging (balls pinned to outer walls by centrifugal force with zero grinding)' },
      { key: 'D', text: 'Fluidized suspension' }
    ],
    correctKey: 'B',
    explanation: 'At critical speed, cataracting occurs: balls are carried up nearly to the top and fall parabolically, maximizing impact force combined with attrition[cite: 11].',
    clinicalKeyPoint: 'Excessive speed causes centrifuging with zero grinding action[cite: 11].',
    pciReference: 'PCI ER-2020 Pharmaceutics (ER20-11T): Size Reduction[cite: 5, 11].'
  },
  {
    id: 'DP-PHARM-004',
    subject: 'Pharmaceutics',
    topic: 'Size Separation Standards (IP)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'According to Indian Pharmacopoeia standards for powder fineness, a "Moderately Coarse Powder" is officially defined as a powder where:',
    options: [
      { key: 'A', text: 'All particles pass through Sieve No. 10 and not more than 40% pass through Sieve No. 44' },
      { key: 'B', text: 'All particles pass through Sieve No. 22 and not more than 40% pass through Sieve No. 60' },
      { key: 'C', text: 'All particles pass through Sieve No. 44 and not more than 40% pass through Sieve No. 85' },
      { key: 'D', text: 'All particles pass through Sieve No. 85 and not more than 40% pass through Sieve No. 120' }
    ],
    correctKey: 'B',
    explanation: 'IP specifications: Coarse (10/44), Moderately Coarse (22/60), Moderately Fine (44/85), Fine (85/120), and Very Fine (all pass Sieve 120)[cite: 11].',
    clinicalKeyPoint: 'Sieve 22 has an aperture size of 710 µm, while Sieve 60 corresponds to 250 µm[cite: 11].',
    pciReference: 'PCI ER-2020 Pharmaceutics: Size Separation[cite: 11].'
  },
  {
    id: 'DP-PHARM-005',
    subject: 'Pharmaceutics',
    topic: 'Tablet Coating Defects',
    bloomTaxonomy: 'Analyze',
    difficulty: 'Hard',
    question: 'During aqueous film coating of tablets, the film shrinks and pulls away from debossed lettering across tablet edges. What is this defect, and how is it corrected?',
    options: [
      { key: 'A', text: 'Orange peel effect; corrected by thinning the spray solution' },
      { key: 'B', text: 'Bridging; corrected by increasing plasticizer concentration and lowering solution viscosity' },
      { key: 'C', text: 'Blistering; corrected by increasing the drying inlet air temperature' },
      { key: 'D', text: 'Blooming; corrected by increasing the molecular weight of the plasticizer' }
    ],
    correctKey: 'B',
    explanation: 'Bridging occurs when coating film pulls away from debossed contours due to excessive internal shrinkage stress or high solution viscosity[cite: 14]. Adding more plasticizer increases film elasticity[cite: 14].',
    clinicalKeyPoint: 'Orange peel results from poor atomization; blistering results from solvent entrapment under rapid surface drying[cite: 14].',
    pciReference: 'PCI ER-2020 Pharmaceutics: Solid Dosage Forms[cite: 5, 14].'
  },
  {
    id: 'DP-PHARM-006',
    subject: 'Pharmaceutics',
    topic: 'Posology Calculation',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A pediatrician prescribes 250 mg of Amoxicillin oral suspension three times daily for a child. The pharmacy stocks a dry powder reconstituted suspension labeled 125 mg / 5 mL. How many mL must be administered per single dose?',
    options: [
      { key: 'A', text: '5.0 mL' },
      { key: 'B', text: '10.0 mL' },
      { key: 'C', text: '15.0 mL' },
      { key: 'D', text: '2.5 mL' }
    ],
    correctKey: 'B',
    explanation: 'Volume = (Desired Dose / Stock Dose) × Stock Volume = (250 mg / 125 mg) × 5 mL = 2 × 5 mL = 10 mL.',
    clinicalKeyPoint: 'Counsel caregivers to use a calibrated oral measuring syringe rather than household teaspoons to ensure accuracy.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Pharmaceutical Calculations.'
  },
  {
    id: 'DP-PHARM-007',
    subject: 'Pharmaceutics',
    topic: 'Percentage Concentrations',
    bloomTaxonomy: 'Apply',
    difficulty: 'Easy',
    question: 'In pharmaceutical dispensing calculations, a 1% w/v active drug concentration in an aqueous ophthalmic solution is equal to how many milligrams per milliliter (mg/mL)?',
    options: [
      { key: 'A', text: '0.1 mg/mL' },
      { key: 'B', text: '1.0 mg/mL' },
      { key: 'C', text: '10.0 mg/mL' },
      { key: 'D', text: '100.0 mg/mL' }
    ],
    correctKey: 'C',
    explanation: '1% w/v = 1 gram in 100 mL = 1,000 mg in 100 mL = 10 mg/mL.',
    clinicalKeyPoint: 'Rapid clinical conversion rule: Multiply the percentage concentration by 10 to obtain mg/mL instantly.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Liquid Dosage Forms.'
  },
  {
    id: 'DP-PHARM-008',
    subject: 'Pharmaceutics',
    topic: 'Sterilization Biological Indicators',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'What is the official biological indicator organism specified in the Indian Pharmacopoeia for validating moist heat sterilization in an autoclave operated at 121°C?',
    options: [
      { key: 'A', text: 'Bacillus atrophaeus' },
      { key: 'B', text: 'Geobacillus stearothermophilus' },
      { key: 'C', text: 'Clostridium tetani' },
      { key: 'D', text: 'Pseudomonas aeruginosa' }
    ],
    correctKey: 'B',
    explanation: 'Geobacillus stearothermophilus spores demonstrate high thermal resistance against saturated steam at 121°C.',
    clinicalKeyPoint: 'Autoclaving standard conditions: 121°C at 15 psi (103 kPa) gauge pressure for 15 to 20 minutes.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Sterilization Methods.'
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
    explanation: 'The Silverson homogenizer draws liquids into the central rotor-stator head, expelling them under hydraulic shear and turbulence at high velocity[cite: 12].',
    clinicalKeyPoint: 'Silverson mixers reduce emulsion droplets down to 2–5 microns rapidly[cite: 12].',
    pciReference: 'PCI ER-2020 Pharmaceutics: Biphasic Dosage Forms[cite: 12].'
  },
  {
    id: 'DP-PHARM-010',
    subject: 'Pharmaceutics',
    topic: 'Drying Technology',
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
    explanation: 'Freeze drying freezes the sample below its eutectic point, then sublimates frozen ice directly into vapor below the triple point (4.58 mmHg).',
    clinicalKeyPoint: 'Lyophilization is standard for thermolabile biologicals, peptide hormones, and intravenous antibiotic powders.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Drying Technologies.'
  },
  {
    id: 'DP-PHARM-011',
    subject: 'Pharmaceutics',
    topic: 'Sugar Coating Steps',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'What is the correct sequential order of operational steps executed during classical pan-based pharmaceutical sugar coating of tablet cores?',
    options: [
      { key: 'A', text: 'Subcoating → Sealing → Polishing → Syruping' },
      { key: 'B', text: 'Sealing → Subcoating → Syruping (Smoothing & Coloring) → Polishing' },
      { key: 'C', text: 'Syruping → Sealing → Subcoating → Polishing' },
      { key: 'D', text: 'Polishing → Syruping → Subcoating → Sealing' }
    ],
    correctKey: 'B',
    explanation: 'Sugar coating steps: 1. Sealing (waterproofing with shellac/zein), 2. Subcoating (rounding edges and building bulk), 3. Syruping (smoothing and coloring), 4. Polishing (carnauba wax gloss).',
    clinicalKeyPoint: 'Subcoating is the step responsible for the 30% to 50% weight gain in sugar-coated tablets.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Solid Dosage Forms.'
  },
  {
    id: 'DP-PHARM-012',
    subject: 'Pharmaceutics',
    topic: 'Enteric Polymers Chemistry',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Which coating polymer dissolves selectively in alkaline intestinal pH while remaining insoluble in gastric fluid (pH < 3), making it an official enteric film-former?',
    options: [
      { key: 'A', text: 'Hydroxypropyl Methylcellulose (HPMC)' },
      { key: 'B', text: 'Cellulose Acetate Phthalate (CAP)' },
      { key: 'C', text: 'Ethyl Cellulose' },
      { key: 'D', text: 'Povidone (PVP)' }
    ],
    correctKey: 'B',
    explanation: 'Cellulose Acetate Phthalate (CAP) contains free carboxylic phthalate groups that remain unionized and insoluble in stomach acid, dissolving at pH > 6.0 in intestinal fluids[cite: 13].',
    clinicalKeyPoint: 'Enteric coatings protect acid-labile drugs (e.g., Omeprazole) or spare gastric mucosa from irritation (e.g., Aspirin)[cite: 13].',
    pciReference: 'PCI ER-2020 Pharmaceutics: Tablet Coating[cite: 13].'
  },
  {
    id: 'DP-PHARM-013',
    subject: 'Pharmaceutics',
    topic: 'Capsule Shell Raw Materials',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Pharmaceutical gelatin used in manufacturing hard and soft gelatin capsule shells is industrially derived from the hydrolysis of:',
    options: [
      { key: 'A', text: 'Plant cellulose and starch' },
      { key: 'B', text: 'Animal collagen derived from skin and bones' },
      { key: 'C', text: 'Synthetic polyacrylate esters' },
      { key: 'D', text: 'Casein dairy protein' }
    ],
    correctKey: 'B',
    explanation: 'Gelatin is an irreversible hydrolyzed collagen product derived from animal connective tissues, bones, and skin (Type A: acid-treated pork skin; Type B: alkali-treated bovine bones)[cite: 14].',
    clinicalKeyPoint: 'HPMC capsules provide a vegetarian alternative to gelatin shells.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Capsules[cite: 5, 14].'
  },
  {
    id: 'DP-PHARM-014',
    subject: 'Pharmaceutics',
    topic: 'Oral Liquid Solutions (Elixirs)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'In liquid dosage forms, how is an "Elixir" distinctly characterized compared to an official aqueous syrup?',
    options: [
      { key: 'A', text: 'It is a non-sweetened, pure water solution of volatile oils' },
      { key: 'B', text: 'It is a clear, pleasantly flavored hydroalcoholic oral solution' },
      { key: 'C', text: 'It is a coarse dispersion of insoluble solids in water' },
      { key: 'D', text: 'It is an oleaginous solution intended exclusively for external massage' }
    ],
    correctKey: 'B',
    explanation: 'Elixirs are clear, sweetened hydroalcoholic oral liquids containing water, alcohol (typically 4% to 40%), and cosolvents (glycerin/propylene glycol) to dissolve drugs insoluble in pure water.',
    clinicalKeyPoint: 'Syrups are concentrated aqueous solutions of sugar (e.g., 66.7% w/w sucrose in Simple Syrup IP).',
    pciReference: 'PCI ER-2020 Pharmaceutics: Monophasic Dosage Forms.'
  },
  {
    id: 'DP-PHARM-015',
    subject: 'Pharmaceutics',
    topic: 'Topical Preparations (Liniments)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'What is the mandatory application instruction that must appear on the cautionary label of an official Liniment?',
    options: [
      { key: 'A', text: 'For ophthalmic installation only' },
      { key: 'B', text: 'To be applied with friction and rubbing; do not apply to broken or abraded skin' },
      { key: 'C', text: 'Dilute with boiling water prior to inhalation' },
      { key: 'D', text: 'Apply gently with a soft cotton swab without friction' }
    ],
    correctKey: 'B',
    explanation: 'Liniments are liquid preparations intended for external rubefacient application to unbroken skin with friction. They contain irritant counter-irritants and should not be used on open wounds.',
    clinicalKeyPoint: 'Lotions are applied dabbed onto skin without friction.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Liquid Dosage Forms.'
  },
  {
    id: 'DP-PHARM-016',
    subject: 'Pharmaceutics',
    topic: 'Novel Drug Delivery Systems (NDDS)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'How do "Niosomes" differ compositionally from standard "Liposomes" in vesicular drug delivery architectures?',
    options: [
      { key: 'A', text: 'Niosomes are fabricated from non-ionic surfactants and cholesterol, whereas liposomes use natural phospholipids' },
      { key: 'B', text: 'Niosomes consist of heavy metals while liposomes are made of albumin' },
      { key: 'C', text: 'Niosomes are purely solid crystalline matrices' },
      { key: 'D', text: 'Liposomes can only encapsulate gaseous active substances' }
    ],
    correctKey: 'A',
    explanation: 'Niosomes are synthetic microscopic vesicles composed of non-ionic surfactants hydrated with cholesterol, offering greater chemical stability than phospholipid-based liposomes.',
    clinicalKeyPoint: 'Both vesicles can entrap hydrophilic drugs in their aqueous core and hydrophobic drugs inside the bilayer membrane.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Novel Drug Delivery Systems[cite: 5].'
  },
  {
    id: 'DP-PHARM-017',
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
    explanation: 'Plastic containers are susceptible to gas/moisture permeation, ingredient leaching, and drug sorption onto polymer walls[cite: 10].',
    clinicalKeyPoint: 'Nitroglycerin and paraldehyde show significant sorption onto polyvinyl chloride (PVC) administration bags and tubing.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Packaging Materials[cite: 5, 10].'
  },
  {
    id: 'DP-PHARM-018',
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
    explanation: 'Tin tubes are chemically inert and ductile, making them preferred for ophthalmic ointments and pharmaceutical topicals.',
    clinicalKeyPoint: 'Aluminum tubes are also widely used, but require internal lacquer coatings when formulating acidic or alkaline semisolids.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Packaging Materials[cite: 5].'
  },
  {
    id: 'DP-PHARM-019',
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
    explanation: 'Butylated Hydroxytoluene (BHT) and Butylated Hydroxyanisole (BHA) are lipid-soluble free-radical scavenger antioxidants.',
    clinicalKeyPoint: 'Methylparaben and sodium benzoate serve as antimicrobial preservatives, not chemical antioxidants.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Pharmaceutical Aids[cite: 5].'
  },
  {
    id: 'DP-PHARM-020',
    subject: 'Pharmaceutics',
    topic: 'Mixing Equipment (Semisolids)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which machine is widely utilized in the pharmaceutical industry for homogenizing and dispersing agglomerated solid drug particles into semisolid ointment bases?',
    options: [
      { key: 'A', text: 'Double Cone Blender' },
      { key: 'B', text: 'Triple Roller Mill' },
      { key: 'C', text: 'Fluidized Bed Processor' },
      { key: 'D', text: 'Planetary Mixer' }
    ],
    correctKey: 'B',
    explanation: 'Triple roller mills consist of three horizontally aligned rolls rotating at differential speeds, generating narrow gap shearing for ointments.',
    clinicalKeyPoint: 'Double cone blenders are used for dry free-flowing powders, not viscous semisolid pastes.',
    pciReference: 'PCI ER-2020 Pharmaceutics: Mixing and Homogenization.'
  },

  // =========================================================================
  // 2. PHARMACEUTICAL CHEMISTRY (ER20-12T) - 20 QUESTIONS
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
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry (ER20-12T): Limit Tests[cite: 6].'
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
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Limit Tests[cite: 6].'
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
    explanation: 'In Hantzsch-Widman rules, nitrogen uses the prefix "aza", 5-membered rings use stem "ol", and fully saturated nitrogenous 5-rings take the suffix "-olidine"[cite: 34, 35]. Aza + ol + idine = Pyrrolidine[cite: 34, 35].',
    clinicalKeyPoint: 'Pyrrole is fully unsaturated (aromatic), while piperidine is a 6-membered saturated nitrogen ring[cite: 34].',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Heterocyclic Systems[cite: 6, 34, 35].'
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
    explanation: 'Aromatic diazonium salts (Ar-N2+ Cl-) are unstable and decompose into phenols, releasing N2 gas at temperatures exceeding 5°C[cite: 33]. Low temperature stabilizes the diazonium intermediate[cite: 33].',
    clinicalKeyPoint: 'The end-point is detected externally using starch-iodide paper, which turns blue with excess nitrous acid.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Volumetric Analysis[cite: 6, 33].'
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
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Gastrointestinal Agents[cite: 6].'
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
    explanation: 'Captopril contains a free sulfhydryl (-SH) group that binds directly to the active zinc ion of ACE. The free thiol group is linked to dysgeusia, rash, and neutropenia.',
    clinicalKeyPoint: 'Enalapril and Ramipril are dicarboxylate prodrugs developed to eliminate thiol-associated adverse reactions.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Cardiovascular Drugs[cite: 6].'
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
    explanation: 'Thiopental is a thiobarbiturate in which sulfur replaces the oxygen atom at position C-2. This increases lipid solubility, enabling rapid entry into the brain.',
    clinicalKeyPoint: 'Rapid termination of central anesthesia occurs through redistribution from the brain to skeletal muscle and adipose tissue.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: CNS Depressants[cite: 6].'
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
    explanation: 'Metformin activates AMP-activated protein kinase (AMPK), reducing hepatic gluconeogenesis and glycogenolysis while improving peripheral glucose uptake.',
    clinicalKeyPoint: 'Metformin does not stimulate insulin secretion and carries minimal risk of hypoglycemia when used as monotherapy.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Oral Hypoglycemics[cite: 6].'
  },
  {
    id: 'DP-CHEM-009',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antineoplastic Alkylating Toxicity',
    bloomTaxonomy: 'Understand',
    difficulty: 'Hard',
    question: 'Cyclophosphamide is an inactive prodrug that requires hepatic cytochrome P450 bioactivation to generate phosphoramide mustard and acrolein. Which organ toxicity is caused by acrolein, and how is it prevented?',
    options: [
      { key: 'A', text: 'Irreversible pulmonary fibrosis; prevented by pyridoxine' },
      { key: 'B', text: 'Hemorrhagic cystitis; prevented by vigorous hydration and IV Mesna' },
      { key: 'C', text: 'Ototoxicity; prevented by calcium gluconate' },
      { key: 'D', text: 'Cumulative cardiotoxicity; prevented by dexrazoxane' }
    ],
    correctKey: 'B',
    explanation: 'Acrolein concentrates in urine, causing bladder urothelial irritation and hemorrhagic cystitis. Mesna (sodium 2-mercaptoethanesulfonate) binds acrolein to form a non-toxic adduct.',
    clinicalKeyPoint: 'Dexrazoxane is used to prevent anthracycline (doxorubicin) cardiomyopathy, not alkylating agent cystitis.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Antineoplastics[cite: 6].'
  },
  {
    id: 'DP-CHEM-010',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Significant Figures in Analysis',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'How many significant figures are present in the analytical measurement value 0.004560 grams?',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '4' },
      { key: 'C', text: '6' },
      { key: 'D', text: '7' }
    ],
    correctKey: 'B',
    explanation: 'Leading zeros are placeholders. The four digits "4", "5", "6", and the trailing zero "0" after the decimal point are significant.',
    clinicalKeyPoint: 'Trailing zeros after a decimal point count as significant figures because they indicate instrumental precision.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Errors and Impurities[cite: 6].'
  },
  {
    id: 'DP-CHEM-011',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Limit Test for Chlorides',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'In the Indian Pharmacopoeia Limit Test for Chlorides, opalescence is produced by reacting chloride impurities with which reagent in the presence of dilute nitric acid?',
    options: [
      { key: 'A', text: 'Barium chloride' },
      { key: 'B', text: 'Silver nitrate (AgNO3)' },
      { key: 'C', text: 'Lead acetate' },
      { key: 'D', text: 'Ferric chloride' }
    ],
    correctKey: 'B',
    explanation: 'Chloride ions react with silver nitrate in dilute nitric acid to form an insoluble silver chloride (AgCl) precipitate, creating visual opalescence.',
    clinicalKeyPoint: 'Nitric acid prevents precipitation of other acid-soluble silver salts such as silver phosphate or carbonate.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Limit Tests[cite: 6].'
  },
  {
    id: 'DP-CHEM-012',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Volumetric Primary Standards',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Which chemical compound serves as an official Primary Standard for standardizing secondary volumetric solutions of sodium hydroxide (NaOH)?',
    options: [
      { key: 'A', text: 'Hydrochloric acid' },
      { key: 'B', text: 'Potassium Hydrogen Phthalate (KHP)' },
      { key: 'C', text: 'Ammonium hydroxide' },
      { key: 'D', text: 'Sulfuric acid' }
    ],
    correctKey: 'B',
    explanation: 'Potassium Hydrogen Phthalate (KHP) is non-hygroscopic, stable, and available in high analytical purity, making it an ideal primary acid standard.',
    clinicalKeyPoint: 'NaOH pellets cannot serve as a primary standard because they absorb atmospheric moisture and carbon dioxide rapidly.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Volumetric Analysis[cite: 6].'
  },
  {
    id: 'DP-CHEM-013',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Non-Aqueous Titrations',
    bloomTaxonomy: 'Understand',
    difficulty: 'Hard',
    question: 'Why are weak organic bases like phenothiazines and alkaloids titrated in glacial acetic acid using perchloric acid titrant instead of water?',
    options: [
      { key: 'A', text: 'Glacial acetic acid acts as a leveling base that suppresses titration' },
      { key: 'B', text: 'Glacial acetic acid acts as a differentiating protogenic solvent, enhancing the apparent basicity of weak bases' },
      { key: 'C', text: 'Water permanently decomposes perchloric acid into toxic chlorine gas' },
      { key: 'D', text: 'Because alkaloids are explosive in aqueous buffers' }
    ],
    correctKey: 'B',
    explanation: 'Water is amphoteric and levels weak bases. Glacial acetic acid acts as an acidic protogenic solvent, accepting protons poorly and forcing the weak base to act as a stronger base relative to perchloric acid.',
    clinicalKeyPoint: 'Crystal violet is used as an indicator, transitioning from violet to blue to emerald-green at the end point.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Non-Aqueous Titration[cite: 6].'
  },
  {
    id: 'DP-CHEM-014',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Fluoroquinolones Cation Chelation',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Why must patients avoid co-administering Ciprofloxacin with oral antacids containing aluminium, magnesium, or calcium hydroxide?',
    options: [
      { key: 'A', text: 'Polyvalent metal cations chelate fluoroquinolones into insoluble complexes, markedly reducing systemic oral absorption' },
      { key: 'B', text: 'Antacids induce CYP3A4 hepatic clearance of ciprofloxacin' },
      { key: 'C', text: 'Antacids trigger renal tubular precipitation of calcium stones' },
      { key: 'D', text: 'The combination induces immediate cardiac QT prolongation' }
    ],
    correctKey: 'A',
    explanation: 'The 4-keto and 3-carboxylate groups of fluoroquinolones chelate multivalent metal cations (Al3+, Mg2+, Fe2+, Ca2+), forming insoluble complexes that reduce bioavailability by over 70% to 90%.',
    clinicalKeyPoint: 'Separate administration by at least 2 hours before or 4 hours after cation-containing antacids or iron supplements.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Anti-Infective Agents[cite: 6].'
  },
  {
    id: 'DP-CHEM-015',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antitubercular Drugs (Rifampicin)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Rifampicin inhibits bacterial DNA-dependent RNA polymerase. What physical counseling warning must be explained to patients initiating therapy?',
    options: [
      { key: 'A', text: 'It causes loss of taste and severe stomatitis' },
      { key: 'B', text: 'It imparts a harmless orange-red discoloration to urine, saliva, tears, and sweat' },
      { key: 'C', text: 'It causes permanent hair depigmentation' },
      { key: 'D', text: 'It causes severe photosensitive skin rashes' }
    ],
    correctKey: 'B',
    explanation: 'Rifampicin and its active metabolites are reddish-orange compounds that color bodily secretions (urine, sweat, tears, sputum), which can permanently stain soft contact lenses.',
    clinicalKeyPoint: 'Rifampicin is a potent CYP3A4 inducer, lowering plasma concentrations of oral contraceptives and warfarin.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Antitubercular Drugs[cite: 6].'
  },
  {
    id: 'DP-CHEM-016',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antifungal Drugs (Polyenes)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Amphotericin B binds to ergosterol in fungal cell membranes, forming pores that cause ion leakage and cell death. What is its dose-limiting organ toxicity during systemic clinical administration?',
    options: [
      { key: 'A', text: 'Ototoxicity' },
      { key: 'B', text: 'Nephrotoxicity' },
      { key: 'C', text: 'Hepatotoxicity' },
      { key: 'D', text: 'Pancreatitis' }
    ],
    correctKey: 'B',
    explanation: 'Amphotericin B binds cholesterol in human renal tubular membranes to a lesser degree, causing renal vasoconstriction and tubular cell damage (nephrotoxicity with hypokalemia)[cite: 25].',
    clinicalKeyPoint: 'Liposomal formulations (AmBisome) reduce renal toxicity by sparing human cell membranes.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Antifungal Agents[cite: 6, 25].'
  },
  {
    id: 'DP-CHEM-017',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Antipsychotics (Phenothiazines)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Chlorpromazine is a prototype typical antipsychotic belonging to which tricyclic chemical class?',
    options: [
      { key: 'A', text: 'Butyrophenones' },
      { key: 'B', text: 'Phenothiazines' },
      { key: 'C', text: 'Thioxanthenes' },
      { key: 'D', text: 'Dibenzazepines' }
    ],
    correctKey: 'B',
    explanation: 'Chlorpromazine contains a tricyclic phenothiazine ring system with an aliphatic dimethylaminopropyl side chain at position N-10 and a chlorine substituent at C-2.',
    clinicalKeyPoint: 'Haloperidol belongs to the butyrophenone class, whereas Chlorpromazine is an aliphatic phenothiazine.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Antipsychotics[cite: 6].'
  },
  {
    id: 'DP-CHEM-018',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Complexometric Titrations (Masking)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Hard',
    question: 'During complexometric EDTA titration of a polyvalent metal mixture, what is the role of adding Potassium Cyanide (KCN) as a "masking agent"?',
    options: [
      { key: 'A', text: 'To buffer the reaction pH strictly at 10.0' },
      { key: 'B', text: 'To selectively bind interfering heavy metal ions (e.g., Cu, Zn, Co) into unreactive complexes, leaving target ions free for EDTA chelation' },
      { key: 'C', text: 'To act as a visual color-transition redox indicator' },
      { key: 'D', text: 'To reduce EDTA from hexadentate to bidentate geometry' }
    ],
    correctKey: 'B',
    explanation: 'Masking agents bind interfering co-solutes into stable cyanide complexes, preventing them from reacting with EDTA so the target analyte (e.g., Ca2+, Mg2+) can be titrated cleanly[cite: 33].',
    clinicalKeyPoint: 'Demasking agents can later be added to liberate masked ions for subsequent titration steps.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Complexometry[cite: 6, 33].'
  },
  {
    id: 'DP-CHEM-019',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Heterocyclic Rings (5-Membered)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which heterocyclic ring system comprises a 5-membered unsaturated aromatic ring containing two nitrogen atoms located at the 1,3-positions?',
    options: [
      { key: 'A', text: 'Pyrrole' },
      { key: 'B', text: 'Pyrazole' },
      { key: 'C', text: 'Imidazole' },
      { key: 'D', text: 'Pyridine' }
    ],
    correctKey: 'C',
    explanation: 'Imidazole is a 5-membered heteroaromatic ring with two nitrogens at positions 1 and 3[cite: 34]. Pyrazole has nitrogens adjacent at positions 1 and 2[cite: 34].',
    clinicalKeyPoint: 'The imidazole ring is present in Histamine, Cimetidine, and azole antifungals.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Heterocyclic Nomenclature[cite: 6, 34].'
  },
  {
    id: 'DP-CHEM-020',
    subject: 'Pharmaceutical Chemistry',
    topic: 'Limit Test for Sulphates',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'What is the chemical composition of the precipitate compared in Nessler cylinders during the IP Limit Test for Sulphates?',
    options: [
      { key: 'A', text: 'Silver sulphate' },
      { key: 'B', text: 'Barium sulphate (BaSO4)' },
      { key: 'C', text: 'Lead sulphate' },
      { key: 'D', text: 'Calcium sulphate' }
    ],
    correctKey: 'B',
    explanation: 'Sulfate ions react with barium chloride reagent in the presence of dilute HCl to produce an insoluble barium sulfate (BaSO4) suspension.',
    clinicalKeyPoint: 'Barium sulfate reagent contains small amounts of alcohol and potassium sulfate to seed uniform crystal nucleation.',
    pciReference: 'PCI ER-2020 Pharmaceutical Chemistry: Limit Tests[cite: 6].'
  },

  // =========================================================================
  // 3. PHARMACOGNOSY (ER20-13T) - 20 QUESTIONS
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
    explanation: 'Mayer\'s reagent is potassium mercuric iodide, yielding a creamy precipitate[cite: 27]. Wagner\'s is iodine in KI (red-brown), Dragendorff\'s is potassium bismuth iodide (red-brown/orange), and Hager\'s is saturated picric acid (yellow)[cite: 27].',
    clinicalKeyPoint: 'Alkaloid salt solutions must be slightly acidified with dilute HCl for these precipitating reactions to occur.',
    pciReference: 'PCI ER-2020 Pharmacognosy (ER20-13T): Alkaloid Evaluation[cite: 5, 27].'
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
    explanation: 'The Thalleioquin reaction is diagnostic for quinoline alkaloids containing a 6-methoxy group (such as Quinine and Quinidine from Cinchona bark)[cite: 27]. Bromine water and ammonia oxidize the drug to form emerald green thalleioquin[cite: 27].',
    clinicalKeyPoint: 'Vitali-Morin test identifies tropane alkaloids (violet), while Marquis test identifies morphine (purple-violet)[cite: 27].',
    pciReference: 'PCI ER-2020 Pharmacognosy: Chemical Identification Tests[cite: 5, 27].'
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
    explanation: 'Saptadhatu: 1. Rasa (lymph/plasma), 2. Rakta (blood), 3. Mamsa (muscle), 4. Meda (adipose tissue), 5. Asthi (bone), 6. Majja (bone marrow/nerve), 7. Shukra (reproductive fluids)[cite: 28].',
    clinicalKeyPoint: 'Panchamahabhutas form the Tridosha: Vata (Space/Air), Pitta (Fire/Water), Kapha (Water/Earth)[cite: 28].',
    pciReference: 'PCI ER-2020 Pharmacognosy: Traditional Systems of Medicine[cite: 5, 28].'
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
    explanation: 'Catgut is made from the submucosal layer of healthy sheep or bovine intestine[cite: 28]. It consists of mammalian collagen and is degraded in tissues by proteolytic enzymes[cite: 28].',
    clinicalKeyPoint: 'Treatment with chromium salts (Chromic Catgut) extends its absorption profile from 10 days to over 20–40 days.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Plant & Animal Fibres in Surgery[cite: 5, 28].'
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
    explanation: 'Clove contains 70% to 90% Eugenol, which acts as a local anesthetic, anti-inflammatory, and mild antiseptic in dental obtundent pastes.',
    clinicalKeyPoint: 'Zinc oxide-eugenol (ZOE) cement is standard in restorative dentistry as a temporary filling base.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Volatile Oils[cite: 5].'
  },
  {
    id: 'DP-COG-007',
    subject: 'Pharmacognosy',
    topic: 'Antitumor Indole Alkaloids (Vinca)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Which pairs of antineoplastic alkaloids isolated from the leaves of Catharanthus roseus (Vinca) bind to tubulin dimers to disrupt mitotic spindle formation?',
    options: [
      { key: 'A', text: 'Quinine and Quinidine' },
      { key: 'B', text: 'Vinblastine and Vincristine' },
      { key: 'C', text: 'Ergotamine and Ergometrine' },
      { key: 'D', text: 'Reserpine and Ajmaline' }
    ],
    correctKey: 'B',
    explanation: 'Vinblastine and Vincristine are dimeric indole-indoline alkaloids from Vinca rosea that block microtubule polymerization, arresting cells in metaphase.',
    clinicalKeyPoint: 'Vincristine is dose-limited by peripheral neurotoxicity (foot drop/paresthesias), whereas Vinblastine causes bone marrow suppression.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Antitumor Drugs[cite: 5].'
  },
  {
    id: 'DP-COG-008',
    subject: 'Pharmacognosy',
    topic: 'Ayurvedic Dosage Forms (Asava & Arishta)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In classical Ayurvedic pharmaceutics, what is the key manufacturing distinction between an "Arishta" and an "Asava"?',
    options: [
      { key: 'A', text: 'Arishta is prepared using boiled decoction (Kashaya), whereas Asava is prepared directly using unboiled cold infusions or fresh juices' },
      { key: 'B', text: 'Arishta is an oily formulation while Asava is an alcoholic solid tablet' },
      { key: 'C', text: 'Asava requires distilled ethanol from foreign sources' },
      { key: 'D', text: 'Arishta contains only animal mineral extracts' }
    ],
    correctKey: 'A',
    explanation: 'Arishta preparations boil crude drugs into a decoction (Kashaya) before fermentation[cite: 29]. Asava preparations add powdered drugs and jaggery directly into cold water without initial boiling[cite: 29].',
    clinicalKeyPoint: 'Self-generated natural alcohol in both acts as a preservative and solvent for active phytoconstituents.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Traditional Systems of Medicine[cite: 5, 29].'
  },
  {
    id: 'DP-COG-009',
    subject: 'Pharmacognosy',
    topic: 'History of Pharmacognosy',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Who coined the scientific term "Pharmacognosy" in 1815 in his published dissertation work titled "Analecta Pharmacognostica"?',
    options: [
      { key: 'A', text: 'Dioscorides' },
      { key: 'B', text: 'C. A. Seydler' },
      { key: 'C', text: 'Theophrastus' },
      { key: 'D', text: 'Alexander Fleming' }
    ],
    correctKey: 'B',
    explanation: 'The German scholar C. A. Seydler first coined the term "Pharmacognosy" in 1815 in his work Analecta Pharmacognostica, from the Greek pharmakon (drug) and gnosis (knowledge)[cite: 26].',
    clinicalKeyPoint: 'Dioscorides is recognized as the Father of Pharmacognosy for authoring De Materia Medica[cite: 26].',
    pciReference: 'PCI ER-2020 Pharmacognosy (ER20-13T): Scope and History[cite: 5, 26].'
  },
  {
    id: 'DP-COG-010',
    subject: 'Pharmacognosy',
    topic: 'Adulteration of Crude Drugs',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'When a valuable crude drug is boiled with water or alcohol to extract its active chemical principles and the dried spent residue is subsequently mixed back into commercial batches, what form of adulteration is this?',
    options: [
      { key: 'A', text: 'Adulteration using artificially manufactured substitutes' },
      { key: 'B', text: 'Adulteration by exhausted drugs' },
      { key: 'C', text: 'Adulteration with superficially similar inferior wild species' },
      { key: 'D', text: 'Faulty collection due to unskilled labor' }
    ],
    correctKey: 'B',
    explanation: 'Exhausted drugs have had their active therapeutic phytoconstituents stripped by solvent extraction, retaining nominal morphology while lacking pharmacological activity.',
    clinicalKeyPoint: 'Exhausted tea leaves, exhausted cloves, and exhausted ginger roots are common examples of this practice.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Quality Control & Adulteration[cite: 5].'
  },
  {
    id: 'DP-COG-011',
    subject: 'Pharmacognosy',
    topic: 'Quality Standards (Ash Values)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In pharmacognostical standardization, determining the "Acid-Insoluble Ash Value" of a crude herbal drug specifically evaluates contamination by:',
    options: [
      { key: 'A', text: 'Water-soluble physiological plant minerals' },
      { key: 'B', text: 'Siliceous earth, sand, and soil adhering to plant surfaces' },
      { key: 'C', text: 'Volatile essential monoterpenes' },
      { key: 'D', text: 'Lipophilic fats and wax residues' }
    ],
    correctKey: 'B',
    explanation: 'Acid-insoluble ash is the residue remaining after boiling total ash with dilute hydrochloric acid. It reflects external mineral dirt, sand, and silica.',
    clinicalKeyPoint: 'Total ash measures both physiological minerals (inside plant tissue) and non-physiological dirt.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Quality Control of Crude Drugs[cite: 5].'
  },
  {
    id: 'DP-COG-012',
    subject: 'Pharmacognosy',
    topic: 'Anthraquinone Glycosides (Senna)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Senna leaves (Cassia angustifolia) contain sennosides A and B. Which chemical group do these glycosides belong to, and which test produces a pink-to-red color in the ammoniacal layer?',
    options: [
      { key: 'A', text: 'Cardiac cardenolides; Keller-Kiliani test' },
      { key: 'B', text: 'Anthraquinone glycosides; Bornträger\'s test' },
      { key: 'C', text: 'Flavonoid glycosides; Shinoda test' },
      { key: 'D', text: 'Cyanogenetic glycosides; Guignard sodium picrate test' }
    ],
    correctKey: 'B',
    explanation: 'Sennosides are anthraquinone derivatives. Hydrolyzing the crude drug with dilute acid followed by benzene/ether extraction and dilute ammonia yields a rose-pink/cherry-red color in the ammoniacal layer (Bornträger\'s test).',
    clinicalKeyPoint: 'Modified Bornträger\'s test uses ferric chloride to oxidize anthrone/dianthrone C-glycosides.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Glycosides.'
  },
  {
    id: 'DP-COG-013',
    subject: 'Pharmacognosy',
    topic: 'Saponins & Foam Index',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Aqueous decoctions of crude drugs containing saponins (e.g., Glycyrrhiza, Quillaja) exhibit persistent froth upon shaking due to their ability to:',
    options: [
      { key: 'A', text: 'Precipitate proteins at room temperature' },
      { key: 'B', text: 'Significantly lower surface tension of aqueous solutions and cause hemolysis of red blood cells' },
      { key: 'C', text: 'Oxidize into volatile hydrocarbons' },
      { key: 'D', text: 'Form insoluble chelates with polyvalent ions' }
    ],
    correctKey: 'B',
    explanation: 'Saponins possess surfactant properties that lower water surface tension, creating persistent foam (Foam Index). They also bind membrane cholesterol to lyse erythrocytes.',
    clinicalKeyPoint: 'Saponins are toxic when injected intravenously due to hemolysis, but are poorly absorbed orally.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Saponin Glycosides.'
  },
  {
    id: 'DP-COG-014',
    subject: 'Pharmacognosy',
    topic: 'Tropane Alkaloids (Vitali-Morin)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Atropa belladonna and Datura stramonium contain tropane alkaloids (hyoscyamine and atropine). Which diagnostic chemical test produces a deep violet color upon treatment with fuming nitric acid followed by methanolic potassium hydroxide?',
    options: [
      { key: 'A', text: 'Vitali-Morin reaction' },
      { key: 'B', text: 'Murexide reaction' },
      { key: 'C', text: 'Thalleioquin reaction' },
      { key: 'D', text: 'Frohde\'s reaction' }
    ],
    correctKey: 'A',
    explanation: 'The Vitali-Morin test detects tropane alkaloids. Fuming nitric acid nitrates the aromatic ring; subsequent addition of methanolic KOH generates a quinoid resonant violet chromophore[cite: 27].',
    clinicalKeyPoint: 'Murexide test identifies purine alkaloids (caffeine); Thalleioquin test detects quinine[cite: 27].',
    pciReference: 'PCI ER-2020 Pharmacognosy: Alkaloids[cite: 27].'
  },
  {
    id: 'DP-COG-015',
    subject: 'Pharmacognosy',
    topic: 'Herbal Nutraceuticals (Spirulina)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Spirulina (Arthrospira platensis) is consumed globally as a nutrient-dense nutraceutical supplement. It is primarily composed of which macronutrient (up to 60–70% dry weight)?',
    options: [
      { key: 'A', text: 'Saturated Triglycerides' },
      { key: 'B', text: 'Complete Bioavailable Proteins' },
      { key: 'C', text: 'Insoluble Lignin Fiber' },
      { key: 'D', text: 'Simple Monosaccharides' }
    ],
    correctKey: 'B',
    explanation: 'Spirulina is a blue-green cyanobacteria containing 60% to 70% complete protein by dry weight, along with B-vitamins, iron, and phycocyanin antioxidants.',
    clinicalKeyPoint: 'Spirulina contains all essential amino acids, making it a functional food for malnutrition and immune support.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Herbs as Health Food & Nutraceuticals[cite: 5].'
  },
  {
    id: 'DP-COG-016',
    subject: 'Pharmacognosy',
    topic: 'Flavonoid Detection (Shinoda Test)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'In phytochemical screening, which reagents are added to an alcoholic extract in the Shinoda test to yield a red-to-magenta color indicating flavonoids?',
    options: [
      { key: 'A', text: 'Magnesium turnings and concentrated Hydrochloric acid' },
      { key: 'B', text: 'Zinc dust and dilute sulfuric acid' },
      { key: 'C', text: 'Copper sulfate and sodium potassium tartrate' },
      { key: 'D', text: 'Ferric chloride in glacial acetic acid' }
    ],
    correctKey: 'A',
    explanation: 'The Shinoda test involves adding magnesium turnings followed by concentrated HCl dropwise, which reduces flavonoids (flavones, flavonols) to yield a crimson/magenta color.',
    clinicalKeyPoint: 'Rutin and Quercetin are classic flavonoids that respond positively to the Shinoda test.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Phytochemical Investigation[cite: 5].'
  },
  {
    id: 'DP-COG-017',
    subject: 'Pharmacognosy',
    topic: 'Tannins Classification',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which chemical reagent distinguishes hydrolysable tannins from condensed tannins (proanthocyanidins) by producing a dark blue precipitate with the former and a greenish-brown precipitate with the latter?',
    options: [
      { key: 'A', text: 'Dilute Ferric Chloride (FeCl3) test solution' },
      { key: 'B', text: 'Bromine water' },
      { key: 'C', text: 'Vanillin-HCl reagent' },
      { key: 'D', text: 'Lead subacetate solution' }
    ],
    correctKey: 'A',
    explanation: 'Hydrolysable tannins (gallitannins/ellagitannins) react with FeCl3 to yield a bluish-black coloration, whereas condensed catechol tannins yield a brownish-green color.',
    clinicalKeyPoint: 'Condensed tannins undergo the Goldbeater\'s skin test and form phlobaphenes upon heating with acids.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Tannins.'
  },
  {
    id: 'DP-COG-018',
    subject: 'Pharmacognosy',
    topic: 'Cardioactive Plants (Rauwolfia)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Rauwolfia serpentina (Indian Snakeroot) belongs to which botanical family, and what is its primary antihypertensive alkaloid?',
    options: [
      { key: 'A', text: 'Apocynaceae; Reserpine' },
      { key: 'B', text: 'Solanaceae; Hyoscyamine' },
      { key: 'C', text: 'Rubiaceae; Quinine' },
      { key: 'D', text: 'Papaveraceae; Codeine' }
    ],
    correctKey: 'A',
    explanation: 'Rauwolfia serpentina belongs to the family Apocynaceae and contains indole alkaloids, notably Reserpine, which depletes vesicular monoamine neurotransmitters.',
    clinicalKeyPoint: 'Reserpine can precipitate severe depressive psychosis by depleting brain serotonin and norepinephrine.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Alkaloids[cite: 26].'
  },
  {
    id: 'DP-COG-019',
    subject: 'Pharmacognosy',
    topic: 'Plant Hallucinogens (Cannabis)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'What is the principal psychoactive phytocannabinoid synthesized in the glandular trichomes of Cannabis sativa?',
    options: [
      { key: 'A', text: 'Cannabidiol (CBD)' },
      { key: 'B', text: 'Delta-9-Tetrahydrocannabinol (THC)' },
      { key: 'C', text: 'Cannabinol (CBN)' },
      { key: 'D', text: 'Cannabigerol (CBG)' }
    ],
    correctKey: 'B',
    explanation: 'Delta-9-tetrahydrocannabinol (THC) is the primary psychoactive component of Cannabis that binds to central CB1 cannabinoid receptors.',
    clinicalKeyPoint: 'Cannabidiol (CBD) is non-psychoactive and is investigated for antiepileptic activity in Dravet syndrome.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Drugs of Abuse.'
  },
  {
    id: 'DP-COG-020',
    subject: 'Pharmacognosy',
    topic: 'Lipids in Pharmacognosy (Castor Oil)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Castor oil is obtained from the seeds of Ricinus communis. Which unique hydroxy-fatty acid constituent is responsible for its cathartic purgative activity in the small intestine?',
    options: [
      { key: 'A', text: 'Oleic acid' },
      { key: 'B', text: 'Ricinoleic acid' },
      { key: 'C', text: 'Linoleic acid' },
      { key: 'D', text: 'Stearic acid' }
    ],
    correctKey: 'B',
    explanation: 'Lipases hydrolyze castor oil in the duodenum into ricinoleic acid, which irritates the intestinal mucosa and stimulates active fluid secretion and peristalsis.',
    clinicalKeyPoint: 'Castor seeds contain the deadly toxic ribosome-inactivating lectin Ricin, which is not extracted into the cold-pressed medicinal oil.',
    pciReference: 'PCI ER-2020 Pharmacognosy: Lipids & Fixed Oils.'
  },

  // =========================================================================
  // 4. HUMAN ANATOMY AND PHYSIOLOGY (ER20-14T) - 20 QUESTIONS
  // =========================================================================
  {
    id: 'DP-HAP-001',
    subject: 'Human Anatomy',
    topic: 'Cardiovascular System (Cardiac Output Calculation)',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A healthy adult patient at rest exhibits a resting heart rate of 72 beats per minute and a left ventricular stroke volume of 70 mL per beat. What is the calculated total systemic blood flow per minute?',
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
    explanation: 'Factor VIII is Antihemophilic factor A[cite: 22]. Its congenital X-linked deficiency causes Hemophilia A.',
    clinicalKeyPoint: 'Factor IX deficiency causes Hemophilia B (Christmas disease); Factor IV is Calcium (Ca2+)[cite: 22].',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Blood and Coagulation[cite: 22].'
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
    explanation: 'ADH and Oxytocin are synthesized in the paraventricular and supraoptic nuclei of the hypothalamus and transported along the hypothalamo-hypophyseal tract to the posterior pituitary (neurohypophysis) for storage and release[cite: 23].',
    clinicalKeyPoint: 'Deficiency of hypothalamic ADH secretion results in central Diabetes Insipidus.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Endocrine System[cite: 23].'
  },
  {
    id: 'DP-HAP-005',
    subject: 'Human Anatomy',
    topic: 'Cellular Organelles (Lysosomes)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which intracellular organelle contains acidic hydrolytic enzymes and is universally designated as the "suicide bag" of the eukaryotic cell?',
    options: [
      { key: 'A', text: 'Mitochondria' },
      { key: 'B', text: 'Lysosome' },
      { key: 'C', text: 'Ribosome' },
      { key: 'D', text: 'Golgi Apparatus' }
    ],
    correctKey: 'B',
    explanation: 'Lysosomes contain acid hydrolases (marker enzyme: acid phosphatase) that digest cellular debris and foreign pathogens[cite: 39]. Rupture can cause cellular autolysis[cite: 39].',
    clinicalKeyPoint: 'Mitochondria are the powerhouses generating ATP through oxidative phosphorylation.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Cell Structure[cite: 38, 39].'
  },
  {
    id: 'DP-HAP-006',
    subject: 'Human Anatomy',
    topic: 'Autonomic Neurotransmitters (NMJ)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which neurotransmitter is synthesized, stored in synaptic vesicles, and released at the somatic Neuromuscular Junction (NMJ) to activate skeletal muscle motor endplates?',
    options: [
      { key: 'A', text: 'Dopamine' },
      { key: 'B', text: 'Acetylcholine (ACh)' },
      { key: 'C', text: 'Norepinephrine' },
      { key: 'D', text: 'Serotonin' }
    ],
    correctKey: 'B',
    explanation: 'Acetylcholine is released from somatic motor nerve terminals and binds to nicotinic acetylcholine receptors (Nm) on the muscle endplate, depolarizing it[cite: 37].',
    clinicalKeyPoint: 'Autoantibodies against nicotinic receptors at the NMJ cause Myasthenia Gravis, which is treated with reversible anticholinesterases like Neostigmine[cite: 37].',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Nervous System.'
  },
  {
    id: 'DP-HAP-007',
    subject: 'Human Anatomy',
    topic: 'Digestive Enzymes (Gastric Secretions)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which cell type in the gastric oxyntic mucosa secretes Hydrochloric Acid (HCl) and Intrinsic Factor of Castle?',
    options: [
      { key: 'A', text: 'Peptic / Chief cells' },
      { key: 'B', text: 'Parietal / Oxyntic cells' },
      { key: 'C', text: 'Enteroendocrine G-cells' },
      { key: 'D', text: 'Mucous neck cells' }
    ],
    correctKey: 'B',
    explanation: 'Parietal (oxyntic) cells utilize an H+/K+-ATPase proton pump to secrete gastric hydrochloric acid and synthesize Intrinsic Factor required for Vitamin B12 absorption.',
    clinicalKeyPoint: 'Proton Pump Inhibitors (Omeprazole, Pantoprazole) covalently bind and inhibit this parietal H+/K+-ATPase pump.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Digestive System.'
  },
  {
    id: 'DP-HAP-008',
    subject: 'Human Anatomy',
    topic: 'Respiratory Volumes & Vital Capacity',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In respiratory physiology, what is the clinical definition of "Vital Capacity" (VC)?',
    options: [
      { key: 'A', text: 'Volume of air remaining in lungs after maximal forced expiration' },
      { key: 'B', text: 'Maximum volume of air that can be exhaled following a maximal deep inspiration' },
      { key: 'C', text: 'Normal volume of air inhaled during quiet resting breathing' },
      { key: 'D', text: 'Total volume of gas enclosed in the alveoli at peak inspiration' }
    ],
    correctKey: 'B',
    explanation: 'Vital Capacity is the maximal volume of air exhaled after maximal inhalation (VC = Tidal Volume + Inspiratory Reserve Volume + Expiratory Reserve Volume, ~4.6 to 4.8 Liters).',
    clinicalKeyPoint: 'Air remaining after maximal forced expiration is the Residual Volume (RV, ~1.2 Liters), which cannot be measured by simple spirometry.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Respiratory System.'
  },
  {
    id: 'DP-HAP-009',
    subject: 'Human Anatomy',
    topic: 'Skeletal Muscle Contraction',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'During skeletal muscle contraction, which intracellular regulatory ion binds directly to Troponin C, triggering conformational movement of tropomyosin away from actin binding sites?',
    options: [
      { key: 'A', text: 'Sodium (Na+)' },
      { key: 'B', text: 'Potassium (K+)' },
      { key: 'C', text: 'Calcium (Ca2+)' },
      { key: 'D', text: 'Magnesium (Mg2+)' }
    ],
    correctKey: 'C',
    explanation: 'Action potentials cause calcium release from the sarcoplasmic reticulum. Ca2+ binds to Troponin C, shifting tropomyosin and exposing actin binding sites for myosin heads.',
    clinicalKeyPoint: 'ATP hydrolysis by myosin ATPase provides the mechanical energy required for cross-bridge cycling and detachment.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Musculoskeletal System.'
  },
  {
    id: 'DP-HAP-010',
    subject: 'Human Anatomy',
    topic: 'Cardiac Conduction System',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which intrinsic anatomical structure serves as the natural primary physiological pacemaker of the human heart, generating rhythmic action potentials at 60–100 beats/min?',
    options: [
      { key: 'A', text: 'Atrioventricular (AV) Node' },
      { key: 'B', text: 'Sinoatrial (SA) Node' },
      { key: 'C', text: 'Bundle of His' },
      { key: 'D', text: 'Purkinje Fibres' }
    ],
    correctKey: 'B',
    explanation: 'The Sinoatrial (SA) node located in the superior wall of the right atrium possesses the highest rate of spontaneous automatic depolarization, serving as the cardiac pacemaker.',
    clinicalKeyPoint: 'If the SA node fails, the AV node takes over automaticity at an intrinsic backup rate of 40–60 beats/min.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Cardiovascular System.'
  },
  {
    id: 'DP-HAP-011',
    subject: 'Human Anatomy',
    topic: 'Hematology (Erythropoiesis)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which circulating glycoprotein hormone is primarily synthesized by interstitial renal fibroblasts in response to tissue hypoxia to stimulate erythrocyte production in bone marrow?',
    options: [
      { key: 'A', text: 'Thrombopoietin' },
      { key: 'B', text: 'Erythropoietin (EPO)' },
      { key: 'C', text: 'Aldosterone' },
      { key: 'D', text: 'Calcitriol' }
    ],
    correctKey: 'B',
    explanation: 'Erythropoietin (EPO) is produced predominantly by the kidneys (~90%) to stimulate proliferation and maturation of red blood cell precursors in response to low oxygen tension[cite: 23].',
    clinicalKeyPoint: 'Chronic kidney disease leads to normocytic normochromic anemia due to deficient renal EPO production.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Blood[cite: 23].'
  },
  {
    id: 'DP-HAP-012',
    subject: 'Human Anatomy',
    topic: 'Cranial Nerves (Vagus)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which cranial nerve (Cranial Nerve X) supplies the primary parasympathetic autonomic innervation to the heart, lungs, and gastrointestinal tract down to the splenic flexure?',
    options: [
      { key: 'A', text: 'Glossopharyngeal Nerve (CN IX)' },
      { key: 'B', text: 'Vagus Nerve (CN X)' },
      { key: 'C', text: 'Facial Nerve (CN VII)' },
      { key: 'D', text: 'Trigeminal Nerve (CN V)' }
    ],
    correctKey: 'B',
    explanation: 'The Vagus nerve (CN X) provides extensive preganglionic parasympathetic fibers that slow heart rate, constrict bronchioles, and stimulate gastrointestinal secretion and motility.',
    clinicalKeyPoint: 'Vagal stimulation releases acetylcholine at cardiac M2 receptors, inducing negative chronotropy and dromotropy[cite: 18].',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Nervous System.'
  },
  {
    id: 'DP-HAP-013',
    subject: 'Human Anatomy',
    topic: 'Eye Anatomy & Fluid Dynamics',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Aqueous humor is continuously secreted by the ciliary body processes into the posterior chamber and drains into the venous system primarily via which specialized circular canal?',
    options: [
      { key: 'A', text: 'Canal of Petit' },
      { key: 'B', text: 'Canal of Schlemm' },
      { key: 'C', text: 'Nasolacrimal duct' },
      { key: 'D', text: 'Hyaloid canal' }
    ],
    correctKey: 'B',
    explanation: 'Aqueous humor flows from the posterior chamber through the pupil into the anterior chamber, filtering through the trabecular meshwork into the Canal of Schlemm to maintain normal IOP (10–21 mmHg).',
    clinicalKeyPoint: 'Obstruction of trabecular drainage through the canal of Schlemm elevates intraocular pressure, leading to glaucoma.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Sense Organs (Eye).'
  },
  {
    id: 'DP-HAP-014',
    subject: 'Human Anatomy',
    topic: 'Endocrine Regulation (Blood Calcium)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Which two opposing hormones precisely regulate serum ionized calcium homeostasis in the human body?',
    options: [
      { key: 'A', text: 'Insulin and Glucagon' },
      { key: 'B', text: 'Parathyroid Hormone (PTH) and Calcitonin' },
      { key: 'C', text: 'Aldosterone and Atrial Natriuretic Peptide' },
      { key: 'D', text: 'Thyroxine and Triiodothyronine' }
    ],
    correctKey: 'B',
    explanation: 'PTH elevates serum calcium by stimulating bone resorption, renal calcium reabsorption, and calcitriol activation. Calcitonin (from thyroid C-cells) lowers serum calcium by inhibiting osteoclasts[cite: 23].',
    clinicalKeyPoint: 'Hypocalcemic tetany results from accidental removal of the parathyroid glands during thyroidectomy.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Endocrine System[cite: 23].'
  },
  {
    id: 'DP-HAP-015',
    subject: 'Human Anatomy',
    topic: 'Liver Microanatomy & Function',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which specialized resident macrophages line the hepatic sinusoids, phagocytosing worn-out red blood cells and foreign bacteria from portal circulation?',
    options: [
      { key: 'A', text: 'Microglia' },
      { key: 'B', text: 'Kupffer cells' },
      { key: 'C', text: 'Langerhans cells' },
      { key: 'D', text: 'Osteoclasts' }
    ],
    correctKey: 'B',
    explanation: 'Kupffer cells are resident hepatic stellate macrophages within the reticuloendothelial system that clean portal venous blood of cellular debris and antigens[cite: 21].',
    clinicalKeyPoint: 'Microglia reside in the central nervous system; Langerhans cells in cutaneous epidermis.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Digestive System & Histology.'
  },
  {
    id: 'DP-HAP-016',
    subject: 'Human Anatomy',
    topic: 'Respiratory Physiology (Gas Exchange)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'What is the primary physical transport mechanism by which oxygen and carbon dioxide cross the alveolar-capillary respiratory membrane?',
    options: [
      { key: 'A', text: 'Primary active transport' },
      { key: 'B', text: 'Simple passive diffusion driven by partial pressure gradients' },
      { key: 'C', text: 'Facilitated diffusion via carrier proteins' },
      { key: 'D', text: 'Endocytosis and pinocytosis' }
    ],
    correctKey: 'B',
    explanation: 'Gas exchange in the pulmonary alveoli occurs purely by simple passive diffusion across the thin respiratory membrane down partial pressure gradients (Fick\'s law of diffusion).',
    clinicalKeyPoint: 'Carbon dioxide diffuses approximately 20 times more rapidly than oxygen across the alveolar membrane due to its higher solubility.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Respiratory System.'
  },
  {
    id: 'DP-HAP-017',
    subject: 'Human Anatomy',
    topic: 'Female Reproductive Physiology',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'A sudden mid-cycle surge in which anterior pituitary gonadotropic hormone directly triggers ovulation (rupture of the mature Graafian follicle) on approximately day 14?',
    options: [
      { key: 'A', text: 'Follicle-Stimulating Hormone (FSH)' },
      { key: 'B', text: 'Luteinizing Hormone (LH)' },
      { key: 'C', text: 'Human Chorionic Gonadotropin (hCG)' },
      { key: 'D', text: 'Prolactin' }
    ],
    correctKey: 'B',
    explanation: 'Rising estrogen levels exert positive feedback on the pituitary, causing a massive LH surge that triggers follicular rupture and release of the secondary oocyte (ovulation)[cite: 23].',
    clinicalKeyPoint: 'Following ovulation, the collapsed ovarian follicle transforms into the corpus luteum, secreting high levels of progesterone[cite: 23].',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Reproductive System.'
  },
  {
    id: 'DP-HAP-018',
    subject: 'Human Anatomy',
    topic: 'Renal Glomerular Filtration',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'What is the normal average Glomerular Filtration Rate (GFR) in a healthy adult with normal renal physiology?',
    options: [
      { key: 'A', text: '50 mL/min' },
      { key: 'B', text: '125 mL/min (~180 Liters/day)' },
      { key: 'C', text: '500 mL/min' },
      { key: 'D', text: '1,000 mL/min' }
    ],
    correctKey: 'B',
    explanation: 'Normal GFR averages 125 mL/min in males (115 mL/min in females), filtering approximately 180 Liters of plasma fluid daily, of which >99% is reabsorbed.',
    clinicalKeyPoint: 'Serum creatinine and cystatin C clearances serve as primary endogenous markers to estimate clinical GFR.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Urinary System.'
  },
  {
    id: 'DP-HAP-019',
    subject: 'Human Anatomy',
    topic: 'Ear Anatomy & Hearing Balance',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'Which anatomical sensory structures inside the inner ear are specifically responsible for detecting dynamic rotational head movements and angular acceleration?',
    options: [
      { key: 'A', text: 'Cochlear Organ of Corti' },
      { key: 'B', text: 'Semicircular canals (Ampullary cupula)' },
      { key: 'C', text: 'Maculae of Utricle and Saccule' },
      { key: 'D', text: 'Tympanic ossicles' }
    ],
    correctKey: 'B',
    explanation: 'The three semicircular canals detect angular rotational acceleration. The utricle and saccule maculae detect static head tilt and linear horizontal/vertical acceleration.',
    clinicalKeyPoint: 'The Organ of Corti located within the cochlea contains hair cells specialized for sound transduction.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Sense Organs (Ear).'
  },
  {
    id: 'DP-HAP-020',
    subject: 'Human Anatomy',
    topic: 'Integumentary System (Skin Layers)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Which outermost layer of the stratified squamous epidermis consists of dead, flattened, anucleated keratinized corneocyte cells that provide a waterproof physical barrier?',
    options: [
      { key: 'A', text: 'Stratum basale' },
      { key: 'B', text: 'Stratum spinosum' },
      { key: 'C', text: 'Stratum corneum' },
      { key: 'D', text: 'Stratum lucidum' }
    ],
    correctKey: 'C',
    explanation: 'The stratum corneum (horny layer) consists of 15–30 layers of dead keratin-packed cells embedded in lipid bilayers, serving as the primary barrier to transdermal drug delivery.',
    clinicalKeyPoint: 'Chemical permeation enhancers (like DMSO and azone) disrupt lipid lamellae in the stratum corneum to facilitate transdermal drug absorption.',
    pciReference: 'PCI ER-2020 Human Anatomy & Physiology: Integumentary System.'
  },

  // =========================================================================
  // 5. SOCIAL PHARMACY (ER20-15T) - 20 QUESTIONS
  // =========================================================================
  {
    id: 'DP-SOC-001',
    subject: 'Social Pharmacy',
    topic: 'Preventive Healthcare Tiers',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Routine national childhood immunization schedules and distribution of insecticide-treated mosquito bed nets fall under which foundational tier of disease prevention?',
    options: [
      { key: 'A', text: 'Primordial prevention (altering broad environmental social conditions)' },
      { key: 'B', text: 'Primary prevention (actions taken prior to the onset of disease)' },
      { key: 'C', text: 'Secondary prevention (early detection via screening and prompt cure)' },
      { key: 'D', text: 'Tertiary prevention (disability limitation and physical rehabilitation)' }
    ],
    correctKey: 'B',
    explanation: 'Primary prevention eliminates disease risk before pathogenesis begins (e.g., vaccination, safe water, health education). Secondary involves early screening, and tertiary manages chronic sequelae.',
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
    explanation: 'Pellagra is caused by niacin (B3) or tryptophan deficiency, presenting with symmetric photosensitive dermatitis, diarrhea, dementia, and death if untreated[cite: 43].',
    clinicalKeyPoint: 'Beri-Beri is caused by thiamine (B1) deficiency; Scurvy by vitamin C deficiency[cite: 43].',
    pciReference: 'PCI ER-2020 Social Pharmacy: Nutrition and Public Health.'
  },
  {
    id: 'DP-SOC-005',
    subject: 'Social Pharmacy',
    topic: 'Epidemiology Terms (Endemic vs Epidemic)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Easy',
    question: 'In public health epidemiology, an infectious disease that is constantly maintained at a baseline, predictable frequency within a defined geographic population is defined as:',
    options: [
      { key: 'A', text: 'Epidemic' },
      { key: 'B', text: 'Pandemic' },
      { key: 'C', text: 'Endemic' },
      { key: 'D', text: 'Sporadic' }
    ],
    correctKey: 'C',
    explanation: 'Endemic refers to the constant presence and/or usual prevalence of a disease within a geographic area. An epidemic represents a sudden spike above normal expectancy.',
    clinicalKeyPoint: 'A pandemic is an epidemic that has spread across international borders affecting a substantial population worldwide.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Epidemiology.'
  },
  {
    id: 'DP-SOC-006',
    subject: 'Social Pharmacy',
    topic: 'Public Health Sanitation (Waterborne Diseases)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Cholera is an acute diarrheal infection caused by ingestion of food or water contaminated with which bacterium?',
    options: [
      { key: 'A', text: 'Salmonella typhi' },
      { key: 'B', text: 'Vibrio cholerae' },
      { key: 'C', text: 'Shigella dysenteriae' },
      { key: 'D', text: 'Mycobacterium leprae' }
    ],
    correctKey: 'B',
    explanation: 'Cholera is caused by Vibrio cholerae. The enterotoxin produces massive, watery "rice-water" stools requiring immediate Oral Rehydration Therapy (ORT).',
    clinicalKeyPoint: 'WHO-recommended ORS formula provides 245 mOsm/L osmolarity to ensure optimal sodium and glucose co-transport absorption.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Environmental Health.'
  },
  {
    id: 'DP-SOC-007',
    subject: 'Social Pharmacy',
    topic: 'Vector-Borne Diseases (Dengue)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Dengue virus is transmitted to humans through the bite of which infected daytime-biting mosquito vector?',
    options: [
      { key: 'A', text: 'Female Anopheles mosquito' },
      { key: 'B', text: 'Aedes aegypti mosquito' },
      { key: 'C', text: 'Culex pipiens mosquito' },
      { key: 'D', text: 'Mansonia mosquito' }
    ],
    correctKey: 'B',
    explanation: 'Dengue, Chikungunya, and Zika arboviruses are transmitted by Aedes mosquitoes (primarily Aedes aegypti), which breed in clean domestic water containers.',
    clinicalKeyPoint: 'Female Anopheles mosquitoes transmit Malaria; Culex transmits Lymphatic Filariasis.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Communicable Diseases.'
  },
  {
    id: 'DP-SOC-008',
    subject: 'Social Pharmacy',
    topic: 'Tuberculosis Control (DOTS Strategy)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Under the National Tuberculosis Elimination Program (NTEP), what does the public health operational acronym "DOTS" stand for?',
    options: [
      { key: 'A', text: 'Direct Oral Treatment Schedule' },
      { key: 'B', text: 'Directly Observed Treatment, Short-Course' },
      { key: 'C', text: 'Daily Outpatient Therapy System' },
      { key: 'D', text: 'Diagnostic Observation and Testing Standard' }
    ],
    correctKey: 'B',
    explanation: 'DOTS stands for Directly Observed Treatment, Short-Course, ensuring a healthcare worker observes the patient swallowing each prescribed antitubercular dose.',
    clinicalKeyPoint: 'Strict adherence via DOTS prevents treatment failure and the emergence of MDR/XDR tuberculosis.',
    pciReference: 'PCI ER-2020 Social Pharmacy: National Health Programs.'
  },
  {
    id: 'DP-SOC-009',
    subject: 'Social Pharmacy',
    topic: 'Family Planning (Oral Contraceptive Pills)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'Combined Oral Contraceptive (COC) pills primarily prevent unintended pregnancy through which physiological endocrine mechanism?',
    options: [
      { key: 'A', text: 'Inducing tubal motility spasms' },
      { key: 'B', text: 'Suppressing pituitary FSH and LH secretion, thereby preventing ovulation' },
      { key: 'C', text: 'Destroying sperm membranes via direct spermicidal action' },
      { key: 'D', text: 'Promoting premature ovarian follicle rupture' }
    ],
    correctKey: 'B',
    explanation: 'Estrogen and progestin exert negative feedback on the hypothalamus and anterior pituitary, suppressing FSH (preventing follicle maturation) and preventing the LH surge (halting ovulation).',
    clinicalKeyPoint: 'Progestins also thicken cervical mucus to impede sperm penetration.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Family Planning & Demography.'
  },
  {
    id: 'DP-SOC-010',
    subject: 'Social Pharmacy',
    topic: 'Vitamin A Deficiency & Prevention',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In pediatric public health, bilateral triangular dry foamy patches appearing on the bulbar conjunctiva due to Vitamin A deficiency are called:',
    options: [
      { key: 'A', text: 'Koplik\'s spots' },
      { key: 'B', text: 'Bitot\'s spots' },
      { key: 'C', text: 'Brushfield spots' },
      { key: 'D', text: 'Roth\'s spots' }
    ],
    correctKey: 'B',
    explanation: 'Bitot\'s spots are triangular keratin plaques on the conjunctiva pathognomonic for severe Vitamin A deficiency (Xerophthalmia)[cite: 43].',
    clinicalKeyPoint: 'National prophylactic guidelines recommend 200,000 IU of Vitamin A orally every 6 months for children aged 1–5 years[cite: 43].',
    pciReference: 'PCI ER-2020 Social Pharmacy: Nutrition and Public Health.'
  },
  {
    id: 'DP-SOC-011',
    subject: 'Social Pharmacy',
    topic: 'Biomedical Sanitation (Disinfection vs Sterilization)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In public health infection control, how is "Sterilization" technically distinguished from "Disinfection"?',
    options: [
      { key: 'A', text: 'Disinfection destroys 100% of all vegetative bacteria and bacterial spores' },
      { key: 'B', text: 'Sterilization destroys all viable microorganisms, including resistant bacterial spores, whereas disinfection reduces pathogen numbers on inanimate surfaces' },
      { key: 'C', text: 'Sterilization is applied only to living human skin' },
      { key: 'D', text: 'There is no scientific difference between the two terms' }
    ],
    correctKey: 'B',
    explanation: 'Sterilization achieves the total destruction or elimination of all forms of microbial life, including bacterial spores. Disinfection destroys vegetative pathogens but does not reliably kill spores.',
    clinicalKeyPoint: 'Antiseptics are non-toxic chemical agents applied to living tissues; disinfectants are applied to inanimate objects.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Microbiology and Sanitation.'
  },
  {
    id: 'DP-SOC-012',
    subject: 'Social Pharmacy',
    topic: 'Vaccine Cold Chain Indicators (VVM)',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A community health pharmacist inspects a vial of Oral Polio Vaccine (OPV) with a Vaccine Vial Monitor (VVM). The inner square is darker than the surrounding outer circle. What clinical action is required?',
    options: [
      { key: 'A', text: 'Administer the vaccine immediately before it expires' },
      { key: 'B', text: 'Discard the vaccine vial immediately because the discard point has been passed due to heat exposure' },
      { key: 'C', text: 'Freeze the vial at -20°C for 24 hours to reverse color change' },
      { key: 'D', text: 'Dilute the vaccine with cold sterile water' }
    ],
    correctKey: 'B',
    explanation: 'A VVM is a heat-sensitive chemical label. When the inner square becomes the same color as or darker than the outer circle, the vaccine has experienced excessive thermal exposure and must be discarded.',
    clinicalKeyPoint: 'Only vials where the inner square is distinctly lighter than the outer circle can be safely administered.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Cold Chain Management.'
  },
  {
    id: 'DP-SOC-013',
    subject: 'Social Pharmacy',
    topic: 'Non-Communicable Diseases (Hypertension Screening)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'According to clinical guidelines, an adult resting blood pressure consistently measuring at or above which cutoff value defines clinical Stage 1 Hypertension?',
    options: [
      { key: 'A', text: '110 / 70 mmHg' },
      { key: 'B', text: '120 / 80 mmHg' },
      { key: 'C', text: '130 / 80 mmHg (or 140 / 90 mmHg under classical criteria)' },
      { key: 'D', text: '90 / 60 mmHg' }
    ],
    correctKey: 'C',
    explanation: 'Classical diagnostic thresholds define hypertension when systolic BP is ≥140 mmHg and/or diastolic BP is ≥90 mmHg across multiple clinical readings.',
    clinicalKeyPoint: 'Pharmacists provide primary screening and counsel on salt reduction (<5g daily) and weight management.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Non-Communicable Diseases.'
  },
  {
    id: 'DP-SOC-014',
    subject: 'Social Pharmacy',
    topic: 'Sexually Transmitted Infections (Syphilis)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'Syphilis is a chronic sexually transmitted treponemal infection caused by which spirochete bacterium?',
    options: [
      { key: 'A', text: 'Neisseria gonorrhoeae' },
      { key: 'B', text: 'Treponema pallidum' },
      { key: 'C', text: 'Chlamydia trachomatis' },
      { key: 'D', text: 'Haemophilus ducreyi' }
    ],
    correctKey: 'B',
    explanation: 'Treponema pallidum causes Syphilis, presenting with a painless genital chancre in primary stages, followed by secondary mucocutaneous lesions and tertiary neurosyphilis.',
    clinicalKeyPoint: 'Benzathine Penicillin G remains the first-line antibiotic treatment of choice across all clinical stages.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Communicable Diseases.'
  },
  {
    id: 'DP-SOC-015',
    subject: 'Social Pharmacy',
    topic: 'National Health Mission (ASHA Workers)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'In the Indian public healthcare delivery system, what does the community health worker acronym "ASHA" represent?',
    options: [
      { key: 'A', text: 'Auxiliary Sanitation Health Assistant' },
      { key: 'B', text: 'Accredited Social Health Activist' },
      { key: 'C', text: 'Association of State Hospital Administrators' },
      { key: 'D', text: 'Allied Systemic Health Agent' }
    ],
    correctKey: 'B',
    explanation: 'ASHA stands for Accredited Social Health Activist, serving as the primary community-level bridge connecting rural populations with Primary Health Centres (PHCs).',
    clinicalKeyPoint: 'ASHAs are key mobilizers for institutional deliveries, immunization tracking, and malaria smear collection.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Health Systems in India.'
  },
  {
    id: 'DP-SOC-016',
    subject: 'Social Pharmacy',
    topic: 'Water Purification (Chlorination)',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'In municipal drinking water purification, what is "Break-Point Chlorination"?',
    options: [
      { key: 'A', text: 'The point where chlorine gas completely evaporates from storage tanks' },
      { key: 'B', text: 'The point of chlorine addition where all organic impurities and ammonia are oxidized, and free residual chlorine begins to appear' },
      { key: 'C', text: 'The point where water pipe corrosion breaks mechanical joints' },
      { key: 'D', text: 'The point where pH drops below 4.0' }
    ],
    correctKey: 'B',
    explanation: 'Break-point chlorination represents the threshold where sufficient chlorine has been added to satisfy the total chlorine demand; any further added chlorine exists as free disinfectant residue.',
    clinicalKeyPoint: 'A minimum free residual chlorine level of 0.5 mg/L (ppm) for 30 minutes of contact time is required for safe drinking water.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Environmental Health.'
  },
  {
    id: 'DP-SOC-017',
    subject: 'Social Pharmacy',
    topic: 'Nutritional Marasmus vs Kwashiorkor',
    bloomTaxonomy: 'Understand',
    difficulty: 'Medium',
    question: 'How is severe pediatric "Kwashiorkor" clinically distinguished from "Nutritional Marasmus"?',
    options: [
      { key: 'A', text: 'Kwashiorkor presents with severe protein deficiency accompanied by peripheral pitting edema and hepatomegaly, whereas Marasmus is pure calorie starvation with severe muscle wasting and no edema' },
      { key: 'B', text: 'Kwashiorkor occurs only in adults over 60 years' },
      { key: 'C', text: 'Marasmus presents with an enlarged fatty liver while Kwashiorkor has normal skin' },
      { key: 'D', text: 'There is no clinical or nutritional difference' }
    ],
    correctKey: 'A',
    explanation: 'Kwashiorkor is severe protein deficiency despite adequate calories, causing hypoalbuminemia, generalized edema, and enlarged fatty liver[cite: 41]. Marasmus is total calorie starvation leading to severe emaciation without edema[cite: 41].',
    clinicalKeyPoint: 'Kwashiorkor children characteristically present with "flaky paint" dermatosis and sparse reddish hair.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Nutrition and Health.'
  },
  {
    id: 'DP-SOC-018',
    subject: 'Social Pharmacy',
    topic: 'Rabies Post-Exposure Prophylaxis',
    bloomTaxonomy: 'Apply',
    difficulty: 'Medium',
    question: 'A patient presents to a community pharmacy immediately following a deep bleeding dog bite wound (Category III exposure). What immediate wound-care action is mandatory prior to visiting the hospital for vaccine administration?',
    options: [
      { key: 'A', text: 'Cauterize the wound with hot metal and cover with airtight adhesive bandage' },
      { key: 'B', text: 'Wash the wound thoroughly with soap and running water for at least 15 minutes, avoiding immediate suturing' },
      { key: 'C', text: 'Apply red chili powder and lime paste' },
      { key: 'D', text: 'Suture the wound closed immediately with surgical silk' }
    ],
    correctKey: 'B',
    explanation: 'Immediate washing of bite wounds with soap and running tap water for 15 minutes removes up to 90% of the hydrophobic enveloped Rabies virus, reducing lethality.',
    clinicalKeyPoint: 'Category III exposures require both modern cell-culture Rabies Vaccine and Rabies Immunoglobulin (RIG) infiltrated into the wound margin.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Communicable Diseases.'
  },
  {
    id: 'DP-SOC-019',
    subject: 'Social Pharmacy',
    topic: 'Epidemiological Rates (Infant Mortality Rate)',
    bloomTaxonomy: 'Remember',
    difficulty: 'Medium',
    question: 'The Infant Mortality Rate (IMR) of a nation is formally calculated and defined as the number of deaths of infants under one year of age per:',
    options: [
      { key: 'A', text: '1,000 total live births in that year' },
      { key: 'B', text: '10,000 pregnant women' },
      { key: 'C', text: '100,000 population' },
      { key: 'D', text: '1,000 hospital admissions' }
    ],
    correctKey: 'A',
    explanation: 'Infant Mortality Rate (IMR) is defined as the number of infant deaths under 1 year of age per 1,000 live births in a given year.',
    clinicalKeyPoint: 'IMR is recognized globally as the single most sensitive indicator of a community\'s socioeconomic and primary healthcare status.',
    pciReference: 'PCI ER-2020 Social Pharmacy: Demography & Health Indicators.'
  },
  {
    id: 'DP-SOC-020',
    subject: 'Social Pharmacy',
    topic: 'Global Health Days',
    bloomTaxonomy: 'Remember',
    difficulty: 'Easy',
    question: 'On which date is "World Health Day" celebrated internationally every year to mark the founding anniversary of the World Health Organization (WHO)?',
    options: [
      { key: 'A', text: '7th April' },
      { key: 'B', text: '25th September (World Pharmacist Day)' },
      { key: 'C', text: '1st December (World AIDS Day)' },
      { key: 'D', text: '24th March (World TB Day)' }
    ],
    correctKey: 'A',
    explanation: 'World Health Day is observed on 7th April each year to commemorate the establishment of the World Health Organization (WHO) in 1948.',
    clinicalKeyPoint: 'World Pharmacists Day is celebrated on 25th September under the auspices of the International Pharmaceutical Federation (FIP)[cite: 8, 45].',
    pciReference: 'PCI ER-2020 Social Pharmacy: Public Health Awareness.'
  }
];

export const PCI_SUBJECT_SUMMARY = [
  {
    name: 'Pharmaceutics',
    code: 'ER20-11T',
    icon: 'Pill',
    description: 'Unit operations, ball mill dynamics, size separation, IP sieve numbers, tablet coating defects & packaging science[cite: 5, 11, 14].',
    questionCount: 50,
    passRate: '86% Pass Rate'
  },
  {
    name: 'Pharmaceutical Chemistry',
    code: 'ER20-12T',
    icon: 'FlaskConical',
    description: 'Limit tests (Fe, As, Cl), volumetric/diazotization titrations, Hantzsch-Widman nomenclature & medicinal SAR[cite: 6, 33, 34].',
    questionCount: 45,
    passRate: '79% Pass Rate'
  },
  {
    name: 'Pharmacognosy',
    code: 'ER20-13T',
    icon: 'Leaf',
    description: 'Mayer/Wagner/Dragendorff reagents, Thalleioquin test, Keller-Kiliani reaction, Saptadhatu & surgical sutures[cite: 27, 28].',
    questionCount: 42,
    passRate: '89% Pass Rate'
  },
  {
    name: 'Human Anatomy',
    code: 'ER20-14T',
    icon: 'Heart',
    description: 'Cardiac cycle, stroke volume math, blood coagulation cascade (Factors I-XIII), nephron reabsorption & endocrinology[cite: 22, 23].',
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
    description: 'Paracetamol antidote, MARPHINE CVS mnemonic, absence seizure T-currents, adrenaline in anaphylaxis & Phase 0 trials[cite: 17, 19, 20].',
    questionCount: 55,
    passRate: '82% Pass Rate'
  },
  {
    name: 'Community Pharmacy',
    code: 'ER20-22T',
    icon: 'HeartPulse',
    description: 'FEFO stock rotation, Reorder Level calculation math, cold chain (+2°C to +8°C) & Teach-Back counseling[cite: 53].',
    questionCount: 40,
    passRate: '88% Pass Rate'
  },
  {
    name: 'Biochemistry',
    code: 'ER20-23T',
    icon: 'Atom',
    description: 'VIP HALL for MTT amino acid mnemonic, Pauly\'s test, Watson-Crick B-DNA geometry & vitamin ring structures[cite: 40, 41, 42, 43].',
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
    description: 'Tall Man lettering for LASA drugs, PTC formulary governance, gamma radiation lead shielding & BMW color bins[cite: 45, 46].',
    questionCount: 36,
    passRate: '87% Pass Rate'
  },
  {
    name: 'Pharmacy Law & Ethics',
    code: 'ER20-26T',
    icon: 'Scale',
    description: 'Schedule M GMP parts, Schedule X duplicate rules, Pharmacy Act 500 hrs, NDPS Ganja definition & DPCO / NPPA[cite: 7, 47, 49, 50].',
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
