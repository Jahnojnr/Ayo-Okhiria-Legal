 // Sticky header background
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'var(--white)';
                navbar.style.backdropFilter = 'none';
            }
        });

       
    // Set current year in copyright
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Back to top functionality
    document.querySelector('.back-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

     
        // Set current year in copyright
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Back to top functionality
        document.querySelector('.back-to-top').addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Sticky header background
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'var(--white)';
                navbar.style.backdropFilter = 'none';
            }
        });

        // Initialize Mapbox Map
        mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbDBlNWJxam4wMDd3M2NwYzU2cDg1N3RrIn0.dummy-token-for-demo';
        
        try {
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v11',
                center: [5.9971, 5.5072], // Ughelli coordinates
                zoom: 15,
                interactive: true
            });

            // Add marker for the office location
            new mapboxgl.Marker({
                color: '#D4AF37'
            })
            .setLngLat([5.9971, 5.5072])
            .setPopup(new mapboxgl.Popup().setHTML('<h4>Ayo-Okhiria & Ayo-Okhiria Legal</h4><p>37 Isoko Road, Ughelli</p>'))
            .addTo(map);

            // Add navigation controls
            map.addControl(new mapboxgl.NavigationControl(), 'top-right');
            
        } catch (error) {
            console.log('Mapbox initialization failed:', error);
            // Fallback to static image if Mapbox fails
            document.getElementById('map').innerHTML = `
                <div style="width:100%;height:400px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;">
                    <div class="text-center">
                        <i class="fas fa-map-marker-alt fa-3x text-gray mb-3"></i>
                        <p>Map temporarily unavailable</p>
                        <a href="https://maps.google.com/?q=37+Isoko+Road+Ughelli+Delta+State" 
                           class="btn btn-sm btn-gold" target="_blank">
                            Open in Google Maps
                        </a>
                    </div>
                </div>
            `;
        }

        // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !phone || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real implementation, you would send this data to your server
            // For now, we'll show a success message
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We will contact you within 24 hours.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });

        // Form validation styling
        const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value) {
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            });
        });
  