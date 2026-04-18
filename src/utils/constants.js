/**
 * HDM Generator — Local Template Definitions
 * Developer: Davix HDM
 * Each template has: id, name, category, icon, schema[], render(data) => HTML string
 */

export const CATEGORIES = {
  all:         { label: 'All',          icon: '▦' },
  certificate: { label: 'Certificates', icon: '🎓' },
  letter:      { label: 'Letters',      icon: '📄' },
  invoice:     { label: 'Invoices',     icon: '🧾' },
  receipt:     { label: 'Receipts',     icon: '🗒️' },
  contract:    { label: 'Contracts',    icon: '📑' },
  cv:          { label: 'CV / Resume',  icon: '👤' },
  application: { label: 'Applications', icon: '✏️' },
}

export const LOCAL_TEMPLATES = [
  // ─────────────── CERTIFICATES ───────────────
  {
    id: 'cert-excellence',
    name: 'Certificate of Excellence',
    category: 'certificate',
    icon: '🎖️',
    description: 'Award for outstanding achievement or performance',
    schema: [
      { name: 'recipientName', label: 'Recipient Full Name', type: 'text', default: 'Emily Davis' },
      { name: 'achievement',   label: 'Achievement / Course', type: 'text', default: 'Advanced Leadership & Strategy' },
      { name: 'issueDate',     label: 'Date Issued', type: 'date', default: '2025-06-15' },
      { name: 'certId',        label: 'Certificate ID', type: 'text', default: 'CERT-2025-089' },
      { name: 'organization',  label: 'Issuing Organization', type: 'text', default: 'HDM Institute of Excellence' },
      { name: 'signatory',     label: 'Authorized Signatory', type: 'text', default: 'Dr. A. Williams' },
      { name: 'signatoryTitle',label: 'Signatory Title', type: 'text', default: 'Executive Director' },
    ],
    render: (d) => `
      <div class="print-bg text-center" style="background:linear-gradient(160deg,#0f2851 0%,#1e3a8a 60%,#0f2851 100%);padding:2.5rem 2rem;color:white;border-radius:4px;position:relative;overflow:hidden;">
        <div style="position:absolute;inset:12px;border:1.5px solid rgba(255,255,255,.25);border-radius:2px;pointer-events:none;"></div>
        <div style="font-size:3rem;margin-bottom:.5rem;">🎖️</div>
        <p style="font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;color:#93c5fd;margin-bottom:.25rem;">Certificate of</p>
        <h2 style="font-family:Georgia,serif;font-size:2rem;font-weight:700;color:#fbbf24;letter-spacing:.05em;margin-bottom:1.5rem;">EXCELLENCE</h2>
        <p style="font-size:.75rem;color:#bfdbfe;margin-bottom:.5rem;">This certificate is proudly awarded to</p>
        <div style="border-top:1px solid rgba(255,255,255,.2);border-bottom:1px solid rgba(255,255,255,.2);padding:1rem 0;margin:.75rem auto;max-width:320px;">
          <p style="font-family:Georgia,serif;font-size:1.6rem;font-weight:600;color:#fff;">${d.recipientName||'————'}</p>
        </div>
        <p style="font-size:.75rem;color:#bfdbfe;margin-bottom:.25rem;">for outstanding completion of</p>
        <p style="font-size:1rem;font-weight:600;color:#fcd34d;margin-bottom:1.5rem;">${d.achievement||'————'}</p>
        <p style="font-size:.7rem;color:#93c5fd;margin-bottom:1.5rem;">${d.organization||'————'}</p>
        <div style="display:flex;justify-content:space-between;font-size:.65rem;color:#bfdbfe;border-top:1px solid rgba(255,255,255,.15);padding-top:.75rem;margin-top:.5rem;">
          <div><p style="color:#fbbf24;font-weight:600;">${d.signatory||'————'}</p><p>${d.signatoryTitle||''}</p></div>
          <div style="text-align:right;"><p>${d.issueDate||'————'}</p><p style="font-family:monospace;font-size:.6rem;color:#6b7280;">${d.certId||''}</p></div>
        </div>
      </div>`
  },
  {
    id: 'cert-scholarship',
    name: 'Scholarship Certificate',
    category: 'certificate',
    icon: '🏛️',
    description: 'Formal scholarship award certificate',
    schema: [
      { name: 'studentName',   label: 'Student Full Name', type: 'text', default: 'James Mwangi' },
      { name: 'scholarshipName',label: 'Scholarship Name', type: 'text', default: 'HDM Academic Excellence Scholarship' },
      { name: 'program',       label: 'Program / Field of Study', type: 'text', default: 'Bachelor of Science in Computer Science' },
      { name: 'institution',   label: 'Institution Name', type: 'text', default: 'University of Nairobi' },
      { name: 'amount',        label: 'Award Amount (optional)', type: 'text', default: 'Full Tuition Coverage' },
      { name: 'period',        label: 'Award Period', type: 'text', default: '2025 – 2029 Academic Year' },
      { name: 'issueDate',     label: 'Date of Award', type: 'date', default: '2025-09-01' },
      { name: 'chairperson',   label: 'Chairperson / Registrar', type: 'text', default: 'Prof. Sarah Ochieng' },
    ],
    render: (d) => `
      <div class="print-bg" style="background:#fffbf5;border:3px solid #92400e;padding:2rem;text-align:center;border-radius:4px;">
        <div style="border:1px solid #d97706;padding:1.5rem;background:linear-gradient(to bottom,#fffbf5,#fef3c7 50%,#fffbf5);">
          <p style="font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:#92400e;">Award of</p>
          <h2 style="font-family:Georgia,serif;font-size:1.6rem;font-weight:700;color:#78350f;margin:.25rem 0;">SCHOLARSHIP</h2>
          <div style="width:60px;height:2px;background:#d97706;margin:.75rem auto;"></div>
          <p style="font-size:.7rem;color:#92400e;margin-bottom:.5rem;">This certifies that</p>
          <p style="font-family:Georgia,serif;font-size:1.4rem;font-weight:600;color:#1c1917;margin:.5rem 0;">${d.studentName||'————'}</p>
          <p style="font-size:.7rem;color:#57534e;margin-bottom:.5rem;">has been awarded the</p>
          <p style="font-size:.9rem;font-weight:700;color:#92400e;margin:.5rem 0;">${d.scholarshipName||'————'}</p>
          <p style="font-size:.7rem;color:#57534e;">for the program of <strong>${d.program||'————'}</strong></p>
          <p style="font-size:.7rem;color:#57534e;">at <strong>${d.institution||'————'}</strong></p>
          <p style="font-size:.75rem;font-weight:600;color:#1c1917;margin:.75rem 0;">${d.amount||''}</p>
          <p style="font-size:.65rem;color:#78350f;">Period: ${d.period||'————'}</p>
          <div style="margin-top:1.5rem;display:flex;justify-content:space-between;font-size:.65rem;color:#57534e;border-top:1px solid #d97706;padding-top:.75rem;">
            <div><p style="font-weight:600;color:#1c1917;">${d.chairperson||'————'}</p><p>Chairperson, Scholarship Committee</p></div>
            <div style="text-align:right;"><p>${d.issueDate||'————'}</p><p>Date of Award</p></div>
          </div>
        </div>
      </div>`
  },

  // ─────────────── LETTERS ───────────────
  {
    id: 'letter-recommendation',
    name: 'Recommendation Letter',
    category: 'letter',
    icon: '📋',
    description: 'Professional letter of recommendation for employment or academia',
    schema: [
      { name: 'writerName',    label: "Writer's Full Name", type: 'text', default: 'Dr. Susan Kamau' },
      { name: 'writerTitle',   label: "Writer's Title / Department", type: 'text', default: 'Head of Department, Computer Science' },
      { name: 'organization',  label: "Writer's Organization", type: 'text', default: 'University of Nairobi' },
      { name: 'writerEmail',   label: "Writer's Email", type: 'email', default: 'skamau@uon.ac.ke' },
      { name: 'writerPhone',   label: "Writer's Phone", type: 'text', default: '+254 700 000 000' },
      { name: 'refName',       label: "Referee's Full Name", type: 'text', default: 'Kevin Otieno' },
      { name: 'refRelation',   label: 'Relationship to Referee', type: 'text', default: 'former student' },
      { name: 'refPeriod',     label: 'Period of Association', type: 'text', default: '3 years (2022–2025)' },
      { name: 'purposeFor',    label: 'Purpose (position/program)', type: 'text', default: 'Software Engineer position at Andela' },
      { name: 'skills',        label: 'Key Strengths / Skills', type: 'textarea', default: 'exceptional analytical ability, strong communication, team leadership, and deep knowledge of software engineering principles', rows: 2 },
      { name: 'closingRemark', label: 'Closing Statement', type: 'textarea', default: 'I wholeheartedly recommend Kevin without reservation and am confident he will be an outstanding asset to any team.', rows: 2 },
      { name: 'letterDate',    label: 'Date', type: 'date', default: '2025-07-01' },
    ],
    render: (d) => `
      <div style="font-family:'Times New Roman',serif;background:white;padding:2rem;line-height:1.6;">
        <div style="border-bottom:2px solid #1e3a5f;padding-bottom:1rem;margin-bottom:1.5rem;">
          <p style="font-size:1.1rem;font-weight:700;color:#1e3a5f;">${d.writerName||'————'}</p>
          <p style="font-size:.8rem;color:#374151;">${d.writerTitle||'————'}</p>
          <p style="font-size:.8rem;color:#374151;">${d.organization||'————'}</p>
          <p style="font-size:.75rem;color:#6b7280;">${d.writerEmail||''} ${d.writerPhone ? '· '+d.writerPhone : ''}</p>
          <p style="font-size:.75rem;color:#6b7280;margin-top:.25rem;">${d.letterDate||'————'}</p>
        </div>
        <p style="font-size:.85rem;font-weight:700;margin-bottom:1rem;">To Whom It May Concern,</p>
        <p style="font-size:.82rem;margin-bottom:.75rem;">I am writing with great pleasure to recommend <strong>${d.refName||'————'}</strong>, whom I have known as a ${d.refRelation||'colleague'} for ${d.refPeriod||'some time'}, for the position of ${d.purposeFor||'————'}.</p>
        <p style="font-size:.82rem;margin-bottom:.75rem;">During our association, ${d.refName?.split(' ')[0]||'They'} consistently demonstrated ${d.skills||'————'}.</p>
        <p style="font-size:.82rem;margin-bottom:1.5rem;">${d.closingRemark||'————'}</p>
        <p style="font-size:.82rem;">Sincerely,</p>
        <div style="margin-top:1.5rem;border-top:1px solid #d1d5db;padding-top:.75rem;">
          <p style="font-size:.85rem;font-weight:700;">${d.writerName||'————'}</p>
          <p style="font-size:.75rem;color:#374151;">${d.writerTitle||''}</p>
        </div>
      </div>`
  },
  {
    id: 'letter-official',
    name: 'Official Business Letter',
    category: 'letter',
    icon: '🏢',
    description: 'Formal business correspondence',
    schema: [
      { name: 'senderName',    label: 'Sender Name', type: 'text', default: 'Michael Chen' },
      { name: 'senderTitle',   label: 'Title / Dept', type: 'text', default: 'Director of Operations' },
      { name: 'senderOrg',     label: 'Organization', type: 'text', default: 'HDM Enterprises Ltd' },
      { name: 'recipientName', label: 'Recipient Name', type: 'text', default: 'Sarah Johnson' },
      { name: 'recipientOrg',  label: "Recipient's Company", type: 'text', default: 'Apex Dynamics' },
      { name: 'letterDate',    label: 'Date', type: 'date', default: '2025-05-20' },
      { name: 'subject',       label: 'Subject', type: 'text', default: 'Partnership Proposal' },
      { name: 'body',          label: 'Letter Body', type: 'textarea', default: 'We are pleased to present this official correspondence regarding our upcoming collaboration. We believe our organizations share aligned goals and look forward to a productive partnership.', rows: 4 },
      { name: 'closing',       label: 'Closing', type: 'text', default: 'Yours faithfully' },
    ],
    render: (d) => `
      <div style="font-family:'Times New Roman',serif;background:white;padding:2rem;border-left:4px solid #1e3a8a;">
        <p style="font-size:1rem;font-weight:700;">${d.senderName||'————'}</p>
        <p style="font-size:.8rem;color:#374151;">${d.senderTitle||''}</p>
        <p style="font-size:.8rem;color:#374151;">${d.senderOrg||''}</p>
        <p style="font-size:.75rem;color:#6b7280;margin-top:.5rem;">${d.letterDate||'————'}</p>
        <div style="margin:1rem 0;">
          <p style="font-size:.85rem;font-weight:600;">${d.recipientName||'————'}</p>
          <p style="font-size:.8rem;color:#374151;">${d.recipientOrg||''}</p>
        </div>
        <p style="font-size:.85rem;font-weight:700;text-decoration:underline;margin-bottom:.75rem;">Re: ${d.subject||'————'}</p>
        <p style="font-size:.82rem;white-space:pre-line;line-height:1.6;">${d.body||'————'}</p>
        <p style="font-size:.82rem;margin-top:1.5rem;">${d.closing||'Yours faithfully'},</p>
        <div style="margin-top:1.5rem;border-top:1px solid #e5e7eb;padding-top:.5rem;">
          <p style="font-size:.85rem;font-weight:700;">${d.senderName||'————'}</p>
          <p style="font-size:.75rem;color:#374151;">${d.senderTitle||''}</p>
        </div>
      </div>`
  },
  {
    id: 'letter-cover',
    name: 'Cover Letter',
    category: 'letter',
    icon: '✉️',
    description: 'Modern job application cover letter',
    schema: [
      { name: 'applicantName', label: 'Your Full Name', type: 'text', default: 'Alex Rivera' },
      { name: 'applicantPhone',label: 'Phone', type: 'text', default: '+254 712 345 678' },
      { name: 'applicantEmail',label: 'Email', type: 'email', default: 'alex.rivera@email.com' },
      { name: 'position',      label: 'Position Applied For', type: 'text', default: 'Product Manager' },
      { name: 'company',       label: 'Company Name', type: 'text', default: 'InnovateTech' },
      { name: 'hiringManager', label: "Hiring Manager's Name", type: 'text', default: 'Taylor Smith' },
      { name: 'letterDate',    label: 'Date', type: 'date', default: '2025-06-01' },
      { name: 'openingPara',   label: 'Opening Paragraph', type: 'textarea', default: 'I am writing to express my strong interest in the Product Manager role at InnovateTech. With 6+ years of experience driving cross-functional teams and delivering user-centric products, I am confident I would be a strong fit for your team.', rows: 3 },
      { name: 'bodyPara',      label: 'Body Paragraph', type: 'textarea', default: 'In my previous role at TechCorp, I led a team of 12 to launch a SaaS platform that grew to 50,000 active users within 6 months, generating $2M in ARR. My approach combines rigorous data analysis with a deep empathy for user needs.', rows: 3 },
      { name: 'closingPara',   label: 'Closing Paragraph', type: 'textarea', default: 'I would welcome the opportunity to discuss how my experience can contribute to InnovateTech\'s mission. Thank you for your time and consideration.', rows: 2 },
    ],
    render: (d) => `
      <div style="font-family:'Helvetica Neue',sans-serif;background:white;padding:2rem;">
        <div style="background:#1e3a5f;color:white;padding:1rem 1.25rem;border-radius:4px;margin-bottom:1.5rem;">
          <p style="font-size:1.1rem;font-weight:700;">${d.applicantName||'————'}</p>
          <p style="font-size:.75rem;opacity:.8;">${d.applicantEmail||''} · ${d.applicantPhone||''}</p>
        </div>
        <p style="font-size:.75rem;color:#6b7280;margin-bottom:1rem;">${d.letterDate||'————'}</p>
        <p style="font-size:.85rem;font-weight:600;">Dear ${d.hiringManager||'Hiring Manager'},</p>
        <p style="font-size:.8rem;line-height:1.65;margin:.75rem 0;">${d.openingPara||'————'}</p>
        <p style="font-size:.8rem;line-height:1.65;margin:.75rem 0;">${d.bodyPara||'————'}</p>
        <p style="font-size:.8rem;line-height:1.65;margin:.75rem 0;">${d.closingPara||'————'}</p>
        <p style="font-size:.82rem;margin-top:1.25rem;">Sincerely,<br><strong>${d.applicantName||'————'}</strong></p>
        <p style="font-size:.75rem;color:#6b7280;margin-top:.25rem;">Re: ${d.position||'————'} at ${d.company||'————'}</p>
      </div>`
  },
  {
    id: 'letter-application',
    name: 'Application Letter',
    category: 'application',
    icon: '📝',
    description: 'General application letter (school, program, grant, etc.)',
    schema: [
      { name: 'applicantName',  label: 'Applicant Full Name', type: 'text', default: 'Faith Wanjiku' },
      { name: 'applicantAddr',  label: 'Applicant Address', type: 'text', default: 'P.O. Box 123, Nairobi, Kenya' },
      { name: 'applicantEmail', label: 'Email', type: 'email', default: 'faith.wanjiku@gmail.com' },
      { name: 'recipientTitle', label: "Recipient's Title & Name", type: 'text', default: 'The Admissions Officer' },
      { name: 'institution',    label: 'Institution / Organization', type: 'text', default: 'Strathmore University' },
      { name: 'letterDate',     label: 'Date', type: 'date', default: '2025-04-01' },
      { name: 'applicationFor', label: 'Applying For', type: 'text', default: 'Master of Business Administration (MBA) Program' },
      { name: 'body',           label: 'Letter Body', type: 'textarea', default: 'I am writing to apply for the MBA Program at Strathmore University. Having completed my Bachelor of Commerce degree with First Class Honours and accumulated 4 years of managerial experience at Equity Bank, I am eager to deepen my business acumen and leadership skills. I am particularly drawn to Strathmore\'s reputation for ethical leadership and innovative curriculum.', rows: 5 },
    ],
    render: (d) => `
      <div style="font-family:'Times New Roman',serif;background:white;padding:2rem;line-height:1.6;">
        <div style="text-align:right;margin-bottom:1rem;font-size:.82rem;">
          <p style="font-weight:600;">${d.applicantName||'————'}</p>
          <p style="color:#374151;">${d.applicantAddr||''}</p>
          <p style="color:#374151;">${d.applicantEmail||''}</p>
          <p style="color:#6b7280;margin-top:.25rem;">${d.letterDate||'————'}</p>
        </div>
        <div style="margin-bottom:1rem;font-size:.82rem;">
          <p style="font-weight:600;">${d.recipientTitle||'————'}</p>
          <p>${d.institution||'————'}</p>
        </div>
        <p style="font-size:.85rem;font-weight:700;margin-bottom:.75rem;">RE: APPLICATION FOR ${(d.applicationFor||'').toUpperCase()}</p>
        <p style="font-size:.82rem;white-space:pre-line;line-height:1.65;">${d.body||'————'}</p>
        <p style="font-size:.82rem;margin-top:1.5rem;">Yours sincerely,</p>
        <div style="margin-top:2rem;border-top:1px solid #e5e7eb;padding-top:.5rem;">
          <p style="font-size:.85rem;font-weight:700;">${d.applicantName||'————'}</p>
        </div>
      </div>`
  },
  {
    id: 'letter-leave',
    name: 'Leave Application',
    category: 'application',
    icon: '📅',
    description: 'Formal leave of absence request letter',
    schema: [
      { name: 'employeeName',  label: 'Employee Full Name', type: 'text', default: 'Brian Kipchoge' },
      { name: 'employeeId',    label: 'Employee ID', type: 'text', default: 'EMP-2025-047' },
      { name: 'department',    label: 'Department', type: 'text', default: 'Finance & Accounts' },
      { name: 'supervisorName',label: "Supervisor's Name", type: 'text', default: 'Ms. Grace Mutua' },
      { name: 'leaveType',     label: 'Type of Leave', type: 'text', default: 'Annual Leave' },
      { name: 'startDate',     label: 'Leave Start Date', type: 'date', default: '2025-07-14' },
      { name: 'endDate',       label: 'Leave End Date', type: 'date', default: '2025-07-21' },
      { name: 'totalDays',     label: 'Total Days', type: 'number', default: '7' },
      { name: 'reason',        label: 'Reason for Leave', type: 'textarea', default: 'I am requesting this leave to attend to a family matter that requires my presence out of town. I have completed all pending assignments and will ensure proper handover before my departure.', rows: 3 },
      { name: 'applicationDate', label: 'Application Date', type: 'date', default: '2025-07-01' },
    ],
    render: (d) => `
      <div style="font-family:'Helvetica Neue',sans-serif;background:white;padding:2rem;">
        <h3 style="font-size:1rem;font-weight:700;text-align:center;text-transform:uppercase;letter-spacing:.05em;border-bottom:2px solid #374151;padding-bottom:.5rem;margin-bottom:1.25rem;">Leave Application Form</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem;font-size:.78rem;margin-bottom:1rem;">
          <div><span style="color:#6b7280;">Employee Name:</span> <strong>${d.employeeName||'————'}</strong></div>
          <div><span style="color:#6b7280;">Employee ID:</span> <strong>${d.employeeId||'————'}</strong></div>
          <div><span style="color:#6b7280;">Department:</span> ${d.department||'————'}</div>
          <div><span style="color:#6b7280;">Supervisor:</span> ${d.supervisorName||'————'}</div>
          <div><span style="color:#6b7280;">Leave Type:</span> <strong>${d.leaveType||'————'}</strong></div>
          <div><span style="color:#6b7280;">Total Days:</span> <strong>${d.totalDays||'—'} day(s)</strong></div>
          <div><span style="color:#6b7280;">Start Date:</span> ${d.startDate||'————'}</div>
          <div><span style="color:#6b7280;">End Date:</span> ${d.endDate||'————'}</div>
        </div>
        <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:.75rem;border-radius:4px;margin-bottom:1rem;">
          <p style="font-size:.7rem;font-weight:700;text-transform:uppercase;color:#6b7280;margin-bottom:.25rem;">Reason</p>
          <p style="font-size:.8rem;line-height:1.5;">${d.reason||'————'}</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem;font-size:.75rem;">
          <div style="border-top:1px solid #374151;padding-top:.5rem;"><p style="font-weight:600;">${d.employeeName||'————'}</p><p style="color:#6b7280;">Employee Signature · ${d.applicationDate||''}</p></div>
          <div style="border-top:1px solid #374151;padding-top:.5rem;"><p style="font-weight:600;">${d.supervisorName||'————'}</p><p style="color:#6b7280;">Supervisor Approval</p></div>
        </div>
      </div>`
  },

  // ─────────────── INVOICES & RECEIPTS ───────────────
  {
    id: 'invoice-pro',
    name: 'Professional Invoice',
    category: 'invoice',
    icon: '🧾',
    description: 'Clean professional invoice with line items',
    schema: [
      { name: 'invoiceNo',     label: 'Invoice Number', type: 'text', default: 'INV-2025-042' },
      { name: 'issuerName',    label: 'Your Name / Business', type: 'text', default: 'HDM Creative Studio' },
      { name: 'issuerEmail',   label: 'Your Email', type: 'email', default: 'billing@hdmstudio.co.ke' },
      { name: 'billToName',    label: 'Bill To (Client Name)', type: 'text', default: 'Acme Corporation Ltd' },
      { name: 'billToAddr',    label: 'Client Address', type: 'text', default: 'P.O. Box 9876, Nairobi' },
      { name: 'invoiceDate',   label: 'Invoice Date', type: 'date', default: '2025-06-01' },
      { name: 'dueDate',       label: 'Due Date', type: 'date', default: '2025-06-15' },
      { name: 'item1',         label: 'Item 1 Description', type: 'text', default: 'Website Design & Development' },
      { name: 'qty1',          label: 'Item 1 Qty', type: 'number', default: '1' },
      { name: 'rate1',         label: 'Item 1 Rate (KES)', type: 'number', default: '85000' },
      { name: 'item2',         label: 'Item 2 Description', type: 'text', default: 'SEO Optimization Package' },
      { name: 'qty2',          label: 'Item 2 Qty', type: 'number', default: '1' },
      { name: 'rate2',         label: 'Item 2 Rate (KES)', type: 'number', default: '25000' },
      { name: 'taxRate',       label: 'Tax / VAT Rate (%)', type: 'number', default: '16' },
      { name: 'notes',         label: 'Payment Notes', type: 'text', default: 'M-Pesa: 0712 345 678 · Bank: Equity Bank A/C 1234567890' },
    ],
    render: (d) => {
      const subtotal = (parseFloat(d.qty1||0)*parseFloat(d.rate1||0)) + (parseFloat(d.qty2||0)*parseFloat(d.rate2||0))
      const tax = subtotal * (parseFloat(d.taxRate||0)/100)
      const total = subtotal + tax
      const fmt = n => 'KES ' + n.toLocaleString('en-KE', {minimumFractionDigits:2})
      return `
        <div style="font-family:'Helvetica Neue',sans-serif;background:white;padding:1.5rem;border-top:4px solid #1e3a5f;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.5rem;">
            <div>
              <p style="font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#6b7280;">Invoice From</p>
              <p style="font-size:1rem;font-weight:700;color:#1e3a5f;">${d.issuerName||'————'}</p>
              <p style="font-size:.75rem;color:#374151;">${d.issuerEmail||''}</p>
            </div>
            <div style="text-align:right;">
              <p style="font-size:1.4rem;font-weight:300;letter-spacing:.05em;color:#1e3a5f;">INVOICE</p>
              <p style="font-family:monospace;font-size:.8rem;font-weight:600;">#${d.invoiceNo||'—'}</p>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem;font-size:.78rem;">
            <div style="background:#f8fafc;padding:.75rem;border-radius:4px;">
              <p style="font-size:.65rem;text-transform:uppercase;color:#6b7280;margin-bottom:.25rem;">Bill To</p>
              <p style="font-weight:600;">${d.billToName||'————'}</p>
              <p style="color:#374151;">${d.billToAddr||''}</p>
            </div>
            <div style="background:#f8fafc;padding:.75rem;border-radius:4px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:.25rem;"><span style="color:#6b7280;">Invoice Date:</span><span>${d.invoiceDate||'—'}</span></div>
              <div style="display:flex;justify-content:space-between;"><span style="color:#6b7280;">Due Date:</span><span style="font-weight:600;color:#dc2626;">${d.dueDate||'—'}</span></div>
            </div>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:.78rem;margin-bottom:1rem;">
            <thead><tr style="background:#1e3a5f;color:white;"><th style="padding:.5rem .75rem;text-align:left;">Description</th><th style="padding:.5rem;text-align:center;">Qty</th><th style="padding:.5rem;text-align:right;">Rate</th><th style="padding:.5rem .75rem;text-align:right;">Amount</th></tr></thead>
            <tbody>
              <tr style="border-bottom:1px solid #e5e7eb;"><td style="padding:.5rem .75rem;">${d.item1||'—'}</td><td style="padding:.5rem;text-align:center;">${d.qty1||0}</td><td style="padding:.5rem;text-align:right;">${fmt(parseFloat(d.rate1||0))}</td><td style="padding:.5rem .75rem;text-align:right;">${fmt(parseFloat(d.qty1||0)*parseFloat(d.rate1||0))}</td></tr>
              ${d.item2 ? `<tr style="border-bottom:1px solid #e5e7eb;"><td style="padding:.5rem .75rem;">${d.item2}</td><td style="padding:.5rem;text-align:center;">${d.qty2||0}</td><td style="padding:.5rem;text-align:right;">${fmt(parseFloat(d.rate2||0))}</td><td style="padding:.5rem .75rem;text-align:right;">${fmt(parseFloat(d.qty2||0)*parseFloat(d.rate2||0))}</td></tr>` : ''}
            </tbody>
            <tfoot>
              <tr><td colspan="3" style="text-align:right;padding:.4rem .75rem;color:#6b7280;">Subtotal</td><td style="text-align:right;padding:.4rem .75rem;">${fmt(subtotal)}</td></tr>
              <tr><td colspan="3" style="text-align:right;padding:.4rem .75rem;color:#6b7280;">VAT (${d.taxRate||0}%)</td><td style="text-align:right;padding:.4rem .75rem;">${fmt(tax)}</td></tr>
              <tr style="background:#1e3a5f;color:white;font-weight:700;"><td colspan="3" style="padding:.5rem .75rem;text-align:right;">TOTAL DUE</td><td style="text-align:right;padding:.5rem .75rem;">${fmt(total)}</td></tr>
            </tfoot>
          </table>
          ${d.notes ? `<p style="font-size:.7rem;color:#374151;border-top:1px solid #e5e7eb;padding-top:.5rem;"><strong>Payment:</strong> ${d.notes}</p>` : ''}
        </div>`
    }
  },
  {
    id: 'quotation',
    name: 'Quotation / Estimate',
    category: 'invoice',
    icon: '📊',
    description: 'Professional quotation for goods or services',
    schema: [
      { name: 'quoteNo',       label: 'Quotation Number', type: 'text', default: 'QT-2025-015' },
      { name: 'issuerName',    label: 'Your Business Name', type: 'text', default: 'HDM Solutions Ltd' },
      { name: 'issuerContact', label: 'Contact / Email', type: 'text', default: 'info@hdmsolutions.co.ke · +254 700 111 222' },
      { name: 'clientName',    label: 'Client Name', type: 'text', default: 'Jambo Logistics Ltd' },
      { name: 'quoteDate',     label: 'Quote Date', type: 'date', default: '2025-06-10' },
      { name: 'validUntil',    label: 'Valid Until', type: 'date', default: '2025-07-10' },
      { name: 'item1',         label: 'Item 1', type: 'text', default: 'Fleet Management Software License' },
      { name: 'qty1',          label: 'Qty 1', type: 'number', default: '5' },
      { name: 'rate1',         label: 'Unit Price (KES)', type: 'number', default: '12000' },
      { name: 'item2',         label: 'Item 2', type: 'text', default: 'Installation & Training' },
      { name: 'qty2',          label: 'Qty 2', type: 'number', default: '1' },
      { name: 'rate2',         label: 'Unit Price (KES)', type: 'number', default: '30000' },
      { name: 'terms',         label: 'Terms & Conditions', type: 'text', default: '50% deposit on acceptance. Balance on delivery.' },
    ],
    render: (d) => {
      const sub = (parseFloat(d.qty1||0)*parseFloat(d.rate1||0))+(parseFloat(d.qty2||0)*parseFloat(d.rate2||0))
      const fmt = n => 'KES '+n.toLocaleString('en-KE',{minimumFractionDigits:2})
      return `
        <div style="font-family:'Helvetica Neue',sans-serif;background:white;padding:1.5rem;border-left:5px solid #059669;">
          <div style="display:flex;justify-content:space-between;margin-bottom:1.25rem;">
            <div><p style="font-size:1rem;font-weight:700;color:#065f46;">${d.issuerName||'————'}</p><p style="font-size:.72rem;color:#374151;">${d.issuerContact||''}</p></div>
            <div style="text-align:right;"><p style="font-size:1.25rem;font-weight:300;color:#059669;letter-spacing:.05em;">QUOTATION</p><p style="font-family:monospace;font-size:.8rem;">#${d.quoteNo||'—'}</p></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;font-size:.78rem;margin-bottom:1rem;">
            <div><p style="color:#6b7280;font-size:.65rem;text-transform:uppercase;">Prepared For</p><p style="font-weight:600;">${d.clientName||'————'}</p></div>
            <div style="text-align:right;"><p style="color:#6b7280;">Date: ${d.quoteDate||'—'}</p><p style="color:#dc2626;font-weight:600;">Valid Until: ${d.validUntil||'—'}</p></div>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:.78rem;margin-bottom:.75rem;">
            <thead><tr style="background:#059669;color:white;"><th style="padding:.5rem;text-align:left;">Item</th><th style="padding:.5rem;text-align:center;">Qty</th><th style="padding:.5rem;text-align:right;">Unit Price</th><th style="padding:.5rem;text-align:right;">Total</th></tr></thead>
            <tbody>
              <tr style="border-bottom:1px solid #d1fae5;"><td style="padding:.5rem;">${d.item1||'—'}</td><td style="text-align:center;">${d.qty1||0}</td><td style="text-align:right;">${fmt(parseFloat(d.rate1||0))}</td><td style="text-align:right;">${fmt(parseFloat(d.qty1||0)*parseFloat(d.rate1||0))}</td></tr>
              ${d.item2?`<tr style="border-bottom:1px solid #d1fae5;"><td style="padding:.5rem;">${d.item2}</td><td style="text-align:center;">${d.qty2||0}</td><td style="text-align:right;">${fmt(parseFloat(d.rate2||0))}</td><td style="text-align:right;">${fmt(parseFloat(d.qty2||0)*parseFloat(d.rate2||0))}</td></tr>`:''}
            </tbody>
            <tfoot><tr style="background:#ecfdf5;font-weight:700;"><td colspan="3" style="padding:.5rem;text-align:right;">TOTAL</td><td style="padding:.5rem;text-align:right;color:#065f46;">${fmt(sub)}</td></tr></tfoot>
          </table>
          <p style="font-size:.7rem;color:#374151;border-top:1px solid #d1fae5;padding-top:.5rem;"><strong>Terms:</strong> ${d.terms||''}</p>
        </div>`
    }
  },
  {
    id: 'receipt-official',
    name: 'Official Receipt',
    category: 'receipt',
    icon: '🗒️',
    description: 'Numbered payment receipt with issuer details',
    schema: [
      { name: 'receiptNo',    label: 'Receipt Number', type: 'text', default: 'RCP-2025-0231' },
      { name: 'issuerName',   label: 'Received By (Business/Person)', type: 'text', default: 'HDM Training Institute' },
      { name: 'issuerAddr',   label: 'Address', type: 'text', default: 'Westlands, Nairobi, Kenya' },
      { name: 'payerName',    label: "Payer's Full Name", type: 'text', default: 'John Kamau Njoroge' },
      { name: 'amount',       label: 'Amount Received (KES)', type: 'number', default: '15000' },
      { name: 'amountWords',  label: 'Amount in Words', type: 'text', default: 'Fifteen Thousand Kenya Shillings Only' },
      { name: 'paymentFor',   label: 'Payment For', type: 'text', default: 'Training Fees — Web Development Bootcamp Q3 2025' },
      { name: 'paymentMethod',label: 'Payment Method', type: 'text', default: 'M-Pesa' },
      { name: 'receiptDate',  label: 'Date', type: 'date', default: '2025-06-05' },
      { name: 'cashier',      label: 'Received By / Cashier', type: 'text', default: 'Janet Mwangi' },
    ],
    render: (d) => `
      <div style="font-family:'Helvetica Neue',sans-serif;background:white;padding:1.5rem;border:2px solid #374151;">
        <div style="background:#374151;color:white;padding:.75rem 1rem;display:flex;justify-content:space-between;align-items:center;margin:-1.5rem -1.5rem 1.25rem;">
          <div><p style="font-size:1rem;font-weight:700;">${d.issuerName||'————'}</p><p style="font-size:.7rem;opacity:.75;">${d.issuerAddr||''}</p></div>
          <div style="text-align:right;"><p style="font-size:.65rem;letter-spacing:.15em;opacity:.75;">OFFICIAL RECEIPT</p><p style="font-family:monospace;font-weight:700;">#${d.receiptNo||'—'}</p></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:.78rem;margin-bottom:1rem;">
          <div><span style="color:#6b7280;">Date: </span><strong>${d.receiptDate||'————'}</strong></div>
          <div><span style="color:#6b7280;">Method: </span><strong>${d.paymentMethod||'————'}</strong></div>
        </div>
        <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:.75rem;border-radius:4px;margin-bottom:1rem;">
          <p style="font-size:.65rem;text-transform:uppercase;color:#6b7280;">Received From</p>
          <p style="font-size:.95rem;font-weight:700;">${d.payerName||'————'}</p>
        </div>
        <div style="background:#f0fdf4;border:1px solid #86efac;padding:.75rem;border-radius:4px;margin-bottom:1rem;">
          <p style="font-size:.65rem;text-transform:uppercase;color:#166534;">Amount</p>
          <p style="font-size:1.4rem;font-weight:700;color:#166534;">KES ${parseFloat(d.amount||0).toLocaleString('en-KE',{minimumFractionDigits:2})}</p>
          <p style="font-size:.72rem;color:#374151;font-style:italic;">${d.amountWords||''}</p>
        </div>
        <div style="margin-bottom:1rem;font-size:.78rem;"><span style="color:#6b7280;">Payment For: </span><span>${d.paymentFor||'————'}</span></div>
        <div style="display:flex;justify-content:space-between;border-top:1px solid #e5e7eb;padding-top:.75rem;font-size:.75rem;">
          <div><p style="font-weight:600;">${d.cashier||'————'}</p><p style="color:#6b7280;">Authorized Signature</p></div>
          <div style="text-align:right;"><p style="font-family:monospace;font-size:.65rem;color:#9ca3af;">${d.receiptNo||''} · ${d.receiptDate||''}</p><p style="color:#6b7280;font-size:.65rem;">This is an official receipt</p></div>
        </div>
      </div>`
  },

  // ─────────────── CONTRACTS ───────────────
  {
    id: 'contract-employment',
    name: 'Employment Contract',
    category: 'contract',
    icon: '📑',
    description: 'Standard employment agreement',
    schema: [
      { name: 'employerName',  label: 'Employer Name / Company', type: 'text', default: 'HDM Technologies Ltd' },
      { name: 'employerReg',   label: 'Company Reg. Number', type: 'text', default: 'CPR/2020/HDM' },
      { name: 'employeeName',  label: 'Employee Full Name', type: 'text', default: 'Daniel Omondi' },
      { name: 'employeeId',    label: 'ID / Passport Number', type: 'text', default: '32145678' },
      { name: 'jobTitle',      label: 'Job Title / Position', type: 'text', default: 'Senior Software Engineer' },
      { name: 'department',    label: 'Department', type: 'text', default: 'Engineering' },
      { name: 'startDate',     label: 'Employment Start Date', type: 'date', default: '2025-08-01' },
      { name: 'contractType',  label: 'Contract Type', type: 'text', default: 'Permanent & Pensionable' },
      { name: 'grossSalary',   label: 'Gross Monthly Salary (KES)', type: 'number', default: '180000' },
      { name: 'workHours',     label: 'Working Hours', type: 'text', default: 'Monday – Friday, 8:00 AM – 5:00 PM' },
      { name: 'probation',     label: 'Probation Period', type: 'text', default: '3 months' },
      { name: 'signDate',      label: 'Date of Signing', type: 'date', default: '2025-07-15' },
    ],
    render: (d) => `
      <div style="font-family:'Times New Roman',serif;background:white;padding:2rem;font-size:.8rem;line-height:1.6;">
        <h2 style="text-align:center;font-size:1.1rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.25rem;">Employment Contract</h2>
        <p style="text-align:center;color:#6b7280;font-size:.75rem;margin-bottom:1.5rem;">Strictly Confidential</p>
        <p>This Employment Contract is entered into on <strong>${d.signDate||'————'}</strong> between:</p>
        <div style="border-left:3px solid #1e3a5f;padding-left:.75rem;margin:.75rem 0;">
          <p><strong>Employer:</strong> ${d.employerName||'————'} (Reg. No: ${d.employerReg||'—'})</p>
          <p><strong>Employee:</strong> ${d.employeeName||'————'} (ID: ${d.employeeId||'—'})</p>
        </div>
        <p style="font-weight:700;margin-top:1rem;">1. POSITION & DUTIES</p>
        <p>The Employee is appointed as <strong>${d.jobTitle||'————'}</strong> in the <strong>${d.department||'————'}</strong> department, effective <strong>${d.startDate||'————'}</strong>, under a <strong>${d.contractType||'————'}</strong> arrangement.</p>
        <p style="font-weight:700;margin-top:.75rem;">2. REMUNERATION</p>
        <p>The Employee shall receive a gross monthly salary of <strong>KES ${parseFloat(d.grossSalary||0).toLocaleString('en-KE',{minimumFractionDigits:2})}</strong> subject to statutory deductions.</p>
        <p style="font-weight:700;margin-top:.75rem;">3. WORKING HOURS</p>
        <p>Normal working hours shall be: ${d.workHours||'————'}.</p>
        <p style="font-weight:700;margin-top:.75rem;">4. PROBATIONARY PERIOD</p>
        <p>The Employee shall serve a probationary period of ${d.probation||'————'} from the date of commencement.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:2rem;border-top:1px solid #e5e7eb;padding-top:1rem;">
          <div><p style="font-weight:700;">For Employer:</p><div style="border-bottom:1px solid #374151;height:2rem;margin:1rem 0;"></div><p>${d.employerName||'————'}</p><p style="color:#6b7280;font-size:.72rem;">Authorized Signatory</p></div>
          <div><p style="font-weight:700;">Employee:</p><div style="border-bottom:1px solid #374151;height:2rem;margin:1rem 0;"></div><p>${d.employeeName||'————'}</p><p style="color:#6b7280;font-size:.72rem;">Signature & Date</p></div>
        </div>
      </div>`
  },

  // ─────────────── CV / RESUME ───────────────
  {
    id: 'cv-professional',
    name: 'Curriculum Vitae',
    category: 'cv',
    icon: '👤',
    description: 'Clean professional CV / résumé',
    schema: [
      { name: 'fullName',     label: 'Full Name', type: 'text', default: 'Amina Hassan' },
      { name: 'profession',   label: 'Professional Title', type: 'text', default: 'Full-Stack Software Engineer' },
      { name: 'email',        label: 'Email', type: 'email', default: 'amina.hassan@email.com' },
      { name: 'phone',        label: 'Phone', type: 'text', default: '+254 722 987 654' },
      { name: 'location',     label: 'Location', type: 'text', default: 'Nairobi, Kenya' },
      { name: 'linkedin',     label: 'LinkedIn / Portfolio URL', type: 'text', default: 'linkedin.com/in/aminahassan' },
      { name: 'summary',      label: 'Professional Summary', type: 'textarea', default: 'Results-driven Full-Stack Engineer with 5+ years building scalable web applications using React, Node.js, and MongoDB. Passionate about clean code, intuitive UX, and delivering business value through technology.', rows: 3 },
      { name: 'experience1',  label: 'Experience 1 (Title @ Company, Period)', type: 'text', default: 'Senior Developer @ Safaricom PLC · 2022–Present' },
      { name: 'expDesc1',     label: 'Experience 1 Highlights', type: 'textarea', default: '• Led migration of legacy systems to React/Node microservices, reducing load time by 60%.\n• Mentored 4 junior developers and drove Agile adoption across 2 squads.', rows: 3 },
      { name: 'experience2',  label: 'Experience 2 (Title @ Company, Period)', type: 'text', default: 'Software Engineer @ Andela · 2019–2022' },
      { name: 'expDesc2',     label: 'Experience 2 Highlights', type: 'textarea', default: '• Delivered 12+ client projects for US-based startups in a remote-first environment.\n• Built RESTful APIs serving 100K+ daily active users.', rows: 3 },
      { name: 'education',    label: 'Education', type: 'text', default: 'BSc Computer Science — University of Nairobi, 2019 (First Class Honours)' },
      { name: 'skills',       label: 'Key Skills (comma-separated)', type: 'text', default: 'React, Node.js, MongoDB, TypeScript, Docker, AWS, Git, Agile/Scrum' },
      { name: 'languages',    label: 'Languages', type: 'text', default: 'English (Fluent), Swahili (Native), French (Conversational)' },
    ],
    render: (d) => {
      const skills = (d.skills||'').split(',').map(s=>s.trim()).filter(Boolean)
      return `
        <div style="font-family:'Helvetica Neue',sans-serif;background:white;display:grid;grid-template-columns:35% 65%;min-height:500px;">
          <div style="background:#1e3a5f;color:white;padding:1.5rem .75rem;">
            <div style="width:56px;height:56px;background:#fbbf24;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:.75rem;">👤</div>
            <p style="font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;opacity:.65;margin-bottom:.15rem;">Contact</p>
            <p style="font-size:.72rem;word-break:break-all;">${d.email||''}</p>
            <p style="font-size:.72rem;">${d.phone||''}</p>
            <p style="font-size:.72rem;">${d.location||''}</p>
            <p style="font-size:.68rem;opacity:.75;word-break:break-all;">${d.linkedin||''}</p>
            <div style="margin-top:1rem;"><p style="font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;opacity:.65;margin-bottom:.5rem;">Skills</p>${skills.map(s=>`<span style="display:inline-block;background:rgba(255,255,255,.15);font-size:.65rem;padding:2px 8px;border-radius:20px;margin:2px;">${s}</span>`).join('')}</div>
            <div style="margin-top:1rem;"><p style="font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;opacity:.65;margin-bottom:.35rem;">Languages</p><p style="font-size:.72rem;opacity:.85;">${d.languages||''}</p></div>
          </div>
          <div style="padding:1.5rem 1rem;">
            <h1 style="font-size:1.2rem;font-weight:700;color:#0f172a;">${d.fullName||'————'}</h1>
            <p style="font-size:.8rem;color:#1e3a5f;font-weight:600;margin-bottom:.75rem;">${d.profession||''}</p>
            <p style="font-size:.75rem;color:#374151;line-height:1.55;margin-bottom:1rem;border-left:3px solid #fbbf24;padding-left:.5rem;">${d.summary||''}</p>
            <p style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#1e3a5f;border-bottom:1px solid #e5e7eb;padding-bottom:.25rem;margin-bottom:.5rem;">Experience</p>
            <p style="font-size:.78rem;font-weight:600;color:#0f172a;">${d.experience1||''}</p>
            <p style="font-size:.73rem;color:#374151;white-space:pre-line;margin:.25rem 0 .75rem;">${d.expDesc1||''}</p>
            <p style="font-size:.78rem;font-weight:600;color:#0f172a;">${d.experience2||''}</p>
            <p style="font-size:.73rem;color:#374151;white-space:pre-line;margin:.25rem 0 .75rem;">${d.expDesc2||''}</p>
            <p style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#1e3a5f;border-bottom:1px solid #e5e7eb;padding-bottom:.25rem;margin-bottom:.5rem;">Education</p>
            <p style="font-size:.75rem;color:#374151;">${d.education||''}</p>
          </div>
        </div>`
    }
  },
]

export const TEMPLATE_CATEGORIES_ORDER = ['all','certificate','letter','application','invoice','receipt','contract','cv']
