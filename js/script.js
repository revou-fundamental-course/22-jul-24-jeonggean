var slideIndex = 1;

        document.addEventListener("DOMContentLoaded", function() {
            bannerShow(slideIndex);
            
            var form = document.getElementById("form");
            if (form) {
                form.onsubmit = function(event) {
                    return validation();
                };
            }
        });

        setInterval(function() {
            plusDiv(1); // Geser ke slide berikutnya
        }, 5000);

        function plusDiv(n) {
            bannerShow(slideIndex += n);
        }

        function bannerShow(n) {
            var i;
            var x = document.getElementsByClassName("banner-content");

            if (n > x.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = x.length;
            }

            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }

            x[slideIndex - 1].style.display = "block";
        }

        // Form validation
        function validation() {
            var name = document.getElementById("lname").value.trim();
            var email = document.getElementById("le-mail").value.trim();
            var interest = document.getElementById("linterest").value.trim();

            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Interest:", interest);

            if (name === "" || email === "" || interest === "") {
                alert('All fields must be filled out');
                return false;
            } else {
                alert('Thank you for submitting');
                return true;
            }
        }