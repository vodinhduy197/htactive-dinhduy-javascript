//slide
var imga = document.getElementsByTagName("img");
var firtSlide = document.getElementById("default"), x = 0;
var slider = setInterval(function() {
        firtSlide.src = imga[x++].src;
        if (x > imga.length - 1) {
            x = 0;
        }
    }, 1000);

//go to top
window.onscroll = function() {scrollFunction()};

//trang lớn hơn 20 thì hiển thị button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

//click thì quay về scroll = 0
function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//dropdown function
function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//đóng hoặc mở drop-down
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; dropdowns.length; i++) {
            var openDropdown = dropdowns[i]; //mở dropdown
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show') //đóng dropdown
            }
        }
    }
}
$('.hoaHongBtn').click(function() {
    $('.image img').show();
    $('.image img').attr("src", "image/slide4.jpg");
    
}); 
$('.hoaCoBtn').click(function() {
    $('.image img').attr("src", "image/slide1.jpg");
    $('.image img').show();
});
$('.xoaAnhBtn').click(function() {
    $('.image img').attr("src", "");
    $('.image img').show();
}); 

$().ready(function() {
	$("#form").validate({
		rules: {
			"length": {
				required: true,
				number: true
			},
			"width": {
				required: true,
				number: true
			}
        },
        messages: {
            "length": {
				required: "Bạn không được bỏ trống trường này!!!",
				number: "Giá trị nhập vào chỉ là số"
			},
			"width": {
				required: "Bạn không được bỏ trống trường này!!!",
				number: "Giá trị nhập vào chỉ là số"
			}
        },
        // submitHandler: function(form) {
        //     $("#form").submit(function(e){
        //     e.preventDefault();
        //     $.ajax({
        //      type: "POST",
        //      url: "js/result.js",
        //      data: $(this).serialize(),
        //      success : function(data) {
        //         $("$result").attr("value", data);
        //      }
        //      });
        //      return false;
        //   });
        // },
    });
});



    