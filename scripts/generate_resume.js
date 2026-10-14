import fs from 'fs';
import path from 'path';

// Helper to write a valid minimal PDF
const pdfContent = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
      /F2 6 0 R
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length 1350
>>
stream
BT
/F2 22 Tf
50 740 Td
(DHARSHINI J G) Tj
ET
BT
/F1 10 Tf
50 720 Td
(Madurai, Tamil Nadu, India | github.com/dharshini-75 | Aspiring Data Analyst / Business Analyst) Tj
ET
BT
/F2 13 Tf
50 685 Td
(CAREER OBJECTIVE) Tj
ET
BT
/F1 10 Tf
50 668 Td
(Final-year B.Sc Computer Science student passionate about data analytics, business insights,) Tj
0 -14 Td
(SQL querying, and building interactive Power BI dashboards to drive data-informed decisions.) Tj
ET
BT
/F2 13 Tf
50 625 Td
(EDUCATION) Tj
ET
BT
/F2 10 Tf
50 608 Td
(B.Sc. in Computer Science - Thiagarajar College, Madurai) Tj
ET
BT
/F1 10 Tf
50 594 Td
(2024 - 2027 | Final-Year Student | Relevant coursework: DBMS, SQL, Data Structures) Tj
ET
BT
/F2 13 Tf
50 555 Td
(TECHNICAL SKILLS) Tj
ET
BT
/F1 10 Tf
50 538 Td
(Data Analytics: Power BI, SQL, Microsoft Excel, Data Cleaning, Exploratory Data Analysis) Tj
0 -14 Td
(Programming: Python (beginner), Pandas, Java fundamentals, C fundamentals) Tj
0 -14 Td
(Tools & Databases: MySQL, MySQL Workbench, GitHub, HTML, CSS, JavaScript) Tj
ET
BT
/F2 13 Tf
50 480 Td
(PROJECTS) Tj
ET
BT
/F2 10 Tf
50 463 Td
(1. BigMart Sales Analysis (Power BI, MySQL, Excel)) Tj
ET
BT
/F1 10 Tf
50 449 Td
(Cleaned sales dataset and engineered SQL queries. Created multi-page Power BI dashboard) Tj
0 -14 Td
(featuring Executive Summary, Outlet Performance Analysis, and Product Deep Dive.) Tj
ET
BT
/F2 10 Tf
50 405 Td
(2. FinGuard AI - Explainable AI Finance Controller (Python, Pandas, Streamlit, Gemini AI)) Tj
ET
BT
/F1 10 Tf
50 391 Td
(Razorpay Buildathon project: Vectorized reconciliation, anomaly detection, grounded AI investigation.) Tj
ET
BT
/F2 10 Tf
50 360 Td
(3. SHEmpower - Women Self-Help Group Management App (React, Node.js, PostgreSQL)) Tj
ET
BT
/F1 10 Tf
50 346 Td
(Mobile app for SHG financial transparency, digital passbook, loans, and reducing-balance interest.) Tj
ET
BT
/F2 13 Tf
50 305 Td
(CERTIFICATIONS) Tj
ET
BT
/F1 10 Tf
50 288 Td
(IBM Data Analyst Professional Certificate (IBM / Coursera)) Tj
ET
BT
/F1 9 Tf
50 240 Td
([Note: Replace this placeholder resume with your official PDF resume in public/resume.pdf]) Tj
ET
endstream
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000001668 00000 n 
0000001737 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1811
%%EOF
`;

const targetDir = path.resolve('./public');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'resume.pdf'), pdfContent);
console.log('Successfully generated public/resume.pdf');
