    // Lightweight SHA-256 using Web Crypto API
   async function generateHash(data) {
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(data));
  const hashArray = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0'));
  const hashHex = hashArray.join('');

  // Take first 8 characters of the hash (you can also use chars 8-16 for more randomness)
  const shortCode = hashHex.substr(0, 8).toUpperCase();

  // Return formatted as SAASXXXXXX
  return 'SAAS' + shortCode;
}
    // Participant list (no IDs)
    const participants = [
      { name: 'Raj Chandel' },
      { name: 'Shah Mahek' },
      { name: 'Prajapati Vikram' },
      { name: 'Tushar Makwana' },
      { name: 'Manish Devaram Prajapati' },
      { name: 'Aaseri Nitu' },
      { name: 'Patel Mahendra N' },
      { name: 'Thakkar Krisha Mayurbhai' },
      { name: 'Bharwad Jil Vijeshbhai' },
      { name: 'Shah Khushi Yogeshbhai' },
      { name: 'Panchal Feny Kamleshbhai' },
      { name: 'Rathod Umang Mahendrabhai' },
      { name: 'Prajapati Prince' },
      { name: 'Katrodiya Dharm' },
      { name: 'Sorathiya Ridhdhi Chandubhai' },
      { name: 'Aarti Jadav' },
      { name: 'Kapatel Dhrishi Tushar' },
      { name: 'Shah Bhavya D' },
      { name: 'Vanshika Mahakale' },
      { name: 'Parmar Dhruvin' },
      { name: 'Prajapati Akshay' },
      { name: 'Rana Nikunj N.' },
      { name: 'Jain Pratham' },
      { name: 'Mistry Rutvik Nileshbhai' },
      { name: 'Tejasvi Kathrani' },
      { name: 'Thakor Nakul' },
      { name: 'Raval Harsh S' },
      { name: 'Twisha Thummar' },
      { name: 'VIishva Nagarsheth' },
      { name: 'Niya Dodiya' },
      { name: 'Kota Riya Ashokbhai' },
      { name: 'Kavar Khushi Alkeshbhai' },
      { name: 'Solanki Raj Baldevbhai' },
      { name: 'Vaghela Mayank Sanjaybhai' },
      { name: 'Vala Vandana' },
      { name: 'Bhavik Rathod' },
      { name: 'Mitvi Fuleshbhai Patel' },
      { name: 'Varshil Desai' },
      { name: 'Darshan Parmar' },
      { name: 'Prakash Chasiya' },
      { name: 'Zeelkumar Sorathiya' },
      { name: 'Gupta Anuj Lalit Kumar' },
      { name: 'Patel Meshva SatishKumar' },
      { name: 'Parmar Vaishali Dharmendrabhai' },
      { name: 'Prajapati Harish Ratilal' },
      { name: 'Prajapati Dixit Sohanlal' },
      { name: 'Nandha Paneri' },
      { name: 'Galiya Kashyap Chandrakant Bhai' },
      { name: 'Khilan Kanani' },
      { name: 'Soni Aayush Amitkumar' },
      { name: 'Smit Budhabhai Desai' },
      { name: 'Soni Mitali Sanjaykumar' },
      { name: 'Thadoda Urvashiben Baldevbhai' },
      { name: 'Mavani Heet Rajeshbhai' },
      { name: 'Timbadiya Mansi Balubhai' },
      { name: 'Makwana Dhyey Manojkumar' },
      { name: 'Het Gajera' },
      { name: 'Isha Padmani' },
      { name: 'Malaviya Riddhi Umeshbhai' },
      { name: 'Vekariya Bhumi Mukeshbhai' },
      { name: 'Mahek Kothiya' },
      { name: 'Ramani Tanvi' },
      { name: 'Solanki Dev Jitendrabhai' },
      { name: 'Krupesh Parmar' },
      { name: 'Savani Meet Rajubhai' },
      { name: 'Rabhadiya Kanan Ishvarbhai' },
      { name: 'Gohil Devang Pankajbhai' },
      { name: 'Barbhaya Jahnvi Prashantbhai' },
      { name: 'Isotiya Rutu Hareshkumar' },
      { name: 'Makwana Vivek Kishorbhai' },
      { name: 'Mahek Nakaran' },
      { name: 'Vavdiya Parthvi' },
      { name: 'Khushi Kalathiya' },
      { name: 'Krushi Paresh Modi' },
      { name: 'Prajapati Rudra Atulkumar' },
      { name: 'Mansi Vaghasiya' },
      { name: 'Vaghasiya Mitava' },
      { name: 'Dholariya Vivek Jitubhai' },
      { name: 'Raiyani Hasti Nileshbhai' },
      { name: 'Darshan Shankala' },
      { name: 'Smit Prajapati' },
      { name: 'Patel Kavankumar DilipKumar' },
      { name: 'Jasoliya Om Shileshbhai' },
      { name: 'Vasoya Dhruvishaben Baldevbhai' },
      { name: 'Mahi' },
      { name: 'Gorasiya Mirali Vijaybhai' },
      { name: 'Khokhani Manshi Rajeshbhai' },
      { name: 'Manav Chawla' },
      { name: 'Pavan Kewlani' }
    ];

    // Precompute hashes
    participants.forEach(p => {
      p.hash = null;
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', async function () {
      const term = this.value.trim().toLowerCase();
      const resultsDiv = document.getElementById('searchResults');
      resultsDiv.innerHTML = '';
      if (!term) {
        resultsDiv.style.display = 'none';
        return;
      }

      const filtered = participants.filter(p => p.name.toLowerCase().includes(term));
      if (filtered.length === 0) {
        resultsDiv.innerHTML = `
          <div class="no-results">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#006400">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <p>No participants found</p>
          </div>
        `;
        resultsDiv.style.display = 'block';
        return;
      }

      for (const p of filtered) {
        if (!p.hash) {
          p.hash = await generateHash(p.name + '|SaaS2025|KSSchool');
        }
        const el = document.createElement('div');
        el.className = 'search-result';
        el.innerHTML = `
          <div class="name-icon">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#006400">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <span>${p.name}</span>
          </div>
          <button onclick="downloadCertificate('${p.name}', '${p.hash}')">Download Certificate</button>
        `;
        resultsDiv.appendChild(el);
      }
      resultsDiv.style.display = 'block';
    });

    // Direct download function
    async function downloadCertificate(name, hash) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 1200;
      canvas.height = 880;

      const img = new Image();
      img.crossOrigin = 'anonymous';

      // Use a reliable, direct image URL (no query strings)
      img.src = 'wheat.jpg';

      img.onload = function () {
        // White background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw wreath
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Overlay
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Gold border
        ctx.strokeStyle = 'rgb(247, 191, 50)';
        ctx.lineWidth = 16;
        ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

        // Text
        ctx.textAlign = 'center';
        ctx.font = 'bold 72px "Playfair Display", serif';
        ctx.fillStyle = 'rgb(247, 191, 50)';
        ctx.fillText('Certificate of Participation', canvas.width / 2, 150);

        ctx.font = '24px Arial, sans-serif';
        ctx.fillStyle = '#7a7a7a';
        ctx.fillText('Presented by K.S. Coding Club', canvas.width / 2, 200);

        ctx.font = '32px Arial, sans-serif';
        ctx.fillStyle = '#4a4a4a';
        ctx.fillText('This certificate is proudly presented to', canvas.width / 2, 260);

        ctx.font = 'bold 50px "Playfair Display", serif';
        const upperName = name.toUpperCase();
        if (upperName.length > 30) ctx.font = 'bold 40px "Playfair Display", serif';
        ctx.fillText(upperName, canvas.width / 2, 350);

        ctx.font = '32px Arial, sans-serif';
        ctx.fillStyle = '#4a4a4a';
        ctx.fillText('For their valuable participation in', canvas.width / 2, 420);
        ctx.fillText('SaaS Product Development, Hackathon Readiness & AI Integration', canvas.width / 2, 470);

        ctx.font = '28px Arial, sans-serif';
        ctx.fillStyle = '#4a4a4a';
        ctx.fillText('Their engagement made the session a success.', canvas.width / 2, 530);

        ctx.font = '24px Arial, sans-serif';
        ctx.fillStyle = '#6a6a6a';
        ctx.fillText('Given on 25 July, 2025 by K.S. School', canvas.width / 2, 600);

         ctx.font = '24px Arial, sans-serif';
        ctx.fillStyle = '#6a6a6a';
        ctx.fillText('Faclicitaotors: Akshay | Raj | Manav | Pavan', canvas.width / 2, 750);

        ctx.font = '20px Arial, sans-serif';
        ctx.fillStyle = '#6b7280';
        ctx.fillText(`Certificate Hash: ${hash}`, canvas.width / 2, 810);

        // Trigger download
        const link = document.createElement('a');
        link.download = `${name.replace(/\s+/g, '_')}_Certificate.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      };

      img.onerror = () => {
        alert('Error: Could not load certificate background. Please try again later.');
      };
    }

    // Verification
    async function verifyCertificate() {
      const input = document.getElementById('verificationInput').value.trim();
      const resultDiv = document.getElementById('verificationResult');
      resultDiv.style.display = 'block';

      if (!input) {
        resultDiv.innerHTML = '<p style="color:#dc2626">Please enter a hash.</p>';
        return;
      }

      const participant = participants.find(p => p.hash === input);
      if (participant) {
        resultDiv.innerHTML = `
          <p style="color:#16a34a; font-weight:500">✅ Certificate Verified!</p>
          <p><strong>Name:</strong> ${participant.name}</p>
          <p><strong>Event:</strong> SaaS Development Workshop</p>
          <p><strong>Date:</strong> 25 July, 2025</p>
        `;
      } else {
        resultDiv.innerHTML = '<p style="color:#dc2626">❌ Invalid or unknown certificate hash.</p>';
      }
    }
 