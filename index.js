const blueBox = document.getElementById("header1")


    let uni_image  = document.createElement("img")
    uni_image.src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
    uni_image.alt = 'school';
    // uni_image.style = "width: 100% height:100%"
    uni_image.style = "font-size: 30px; font-weight: 700;"
    // uni_image.target = '_blank'
    // uni_image.href = 'http://google.com'
    // uni_image.textContent = ""

    blueBox.addEventListener('mouseover', function(){
        blueBox.appendChild(uni_image)
    })

    blueBox.addEventListener('mouseleave',function(){
        blueBox.removeChild(uni_image)
    })