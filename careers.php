<!DOCTYPE html>
<html>
	<head>
		<title>Urja Future Systems</title>
		<link rel="icon" type="image/png" href="images/UrjaLogoIcon.png">
		<link href='http://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/bootstrap.css"  type="text/css"/>
		<link rel="stylesheet" href="css/animate.css">
		<link rel="stylesheet" href="css/urjaStylesheet.css"  type="text/css"/>
	
		<script type="text/javascript" src="js/jquery-1.11.0.js"></script>
		<script type="text/javascript" src="js/jquery.validate.js"></script>
		<script type="text/javascript" src="js/custom_Frontend.js"></script>

		<script type="text/javascript">
			$(document).ready(function(){

				// $("#bodyContent").load("ajax/careersAjax_JQuery.html");
				$("ul > li").removeClass("active");
				$("#careersNav, #careersFtNav").parent().addClass("active");
				$(".prevArrow").css("display","none");
				$(".nextArrow").css("display","none");
			
			});
		</script>
	</head>

	<body>
	<div class="pageWrapper">

			<div class="header">			
				<div class="navbar navbar-static-top">
		            <div class="navbar-inner">
		              <div class="container">
		              	<a href="index.html" class="animated fadeIn companyLogo">Company Logo</a>   
		                <ul class="nav">
		                  <li><a href="index.html">Home</a></li>
		                  <li><a id="aboutNav" href="#">About Us</a>
		                  	<ul class="subNav animated fadeInDown">
		                  		<li><a id="certNav" href="">Certification</a></li>
		                  	</ul>
		                  </li>
		                  <li><a href="#">Clean Energy</a>
		                  	<ul class="subNav animated fadeInDown">
		                  		<li><a id="energyNav" href="#">Solar Energy</a></li>
		                  		<li><a id="pumpingNav" href="#">Solar Pumping</a></li>
		                  		<li><a id="optNav" href="#">Energy Optimization</a></li>
		                  		<li><a id="productNav" href="#">Solar Product</a></li>
		                  	</ul>
		                  </li>

		                  <li><a id="resourceNav" href="#">Resource Base</a></li>
		                  <li><a id="careersNav" href="careers.php">Careers</a></li>
		                  <li><a id="contactNav" href="#">Contact</a>

		                  	<ul class="subNav animated fadeInDown">
		                  		<li><a id="networkNav" href="">Network Coverage</a></li>
		                  	</ul>
		                  </li>
		                  <li><a id="blogNav" href="#">Blog<i id="blogIcon"></i></a></li>
		                </ul>
		              </div> <!-- container -->
		            </div> <!-- navbar-inner -->
	          	</div>	<!-- navbar -->			
			</div><!-- header -->
			<div class="container whiteBG positionRelative">
				<div class="row tstImg">
					<div class="span1 sidenav">
						<ul class="animated fadeInLeft">
							<li class="textVertical blueBG" id="energySideNav"><a href="#">Solar Energy</a></li>
							<li class="textVertical greenBG" id="pumpingSideNav"><a href="#">Solar Pumping</a></li>
							<li class="textVertical khakiBG" id="optSideNav"><a href="#">Energy Optimisation</a></li>
							<li class="textVertical orangeBG" id="productSideNav"><a href="#">Solar Product</a></li>
						</ul>
					</div><!-- span1 -->

					<div class="span8 mainBody" id="bodyContent">

						<div class="animated" id="businessPage">
						    <h2 class="animated fadeInDown blueHeading de2ms">Carrers</h2>
							<p class="animated fadeInRight de4ms">
								We are looking for young energetic, self-motivated and hardworking candidates for our expansion plans. If you want to be a part of our organisation please fill up the following form or mail your resume at 
								<a href="mailto:hr@urjafuture.in">hr@urjafuture.in</a>
							</p>

							<?php
						        
						        if(isset($_POST['email'])) 
						        {
						            // EDIT THE 2 LINES BELOW AS REQUIRED
						         
						            $email_to = "chinmay412@gmail.com";
						            $email_subject = "Urja Future - Resume POST";
						         
						            function died($error) 
						            {
						                // your error code can go here
						         
						                echo "<br/><br/>We are very sorry, but there were error(s) found with the form you submitted. ";
						                echo "These errors appear below.<br /><br />";
						                echo $error."<br /><br />";
						                echo "Please go back and fix these errors.<br /><br />";
						         
						                die();
						            }
						         
						            // validation expected data exists
						         
						            if(!isset($_POST["postApplying"]) ||
						            	!isset($_POST["full_name"]) ||
						            	!isset($_POST["qualification"]) ||
						            	!isset($_POST["area_of_ex"]) ||
						            	!isset($_POST["total_experience"]) ||
						            	!isset($_POST["addr"]) ||
						            	!isset($_POST["telephone"]) ||
						               !isset($_POST["email"]) ||
						               !isset($_POST["salary"]) ||
						               !isset($_POST["resume"])) 
						            {
						                died("We are sorry, but there appears to be a problem with the form you submitted.");      
						            }
						         
						            $postApplying = $_POST["postApplying"]; // required
						            $full_name = $_POST["full_name"]; // required
						            $qualification = $_POST["qualification"]; // required
						            $area_of_ex = $_POST["area_of_ex"]; // required
						            $total_experience = $_POST["total_experience"]; // required
						            $addr = $_POST["addr"]; // required
						            $telephone = $_POST["telephone"]; // required
						            $email_from = $_POST["email"]; // required
						            $salary = $_POST["salary"]; // required
						            $resume = $_POST["resume"]; // required
						         
						            $error_message = "";
						            $email_exp = "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/";
						         
						            if(!preg_match($email_exp,$email_from)) 
						            {
						                $error_message .= "The Email Address you entered does not appear to be valid.<br />";
						            }
						            
						            // $string_exp = "/^[A-Za-z .'-]+$/";
						            $string_exp = "/^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/";
									
									if(!preg_match($string_exp,$postApplying)) 
						            {
						                $error_message .= "Post applying for text not valid.<br />";
						            }            
						            if(!preg_match($string_exp,$full_name)) 
						            {
						                $error_message .= "Candidate Name not valid.<br />";
						            }
						            if(!preg_match($string_exp,$qualification)) 
						            {
						                $error_message .= "Qualification text not valid.<br />";
						            }
						            if(!preg_match($string_exp,$area_of_ex)) 
						            {
						                $error_message .= "Area Of Expertise text not valid.<br />";
						            }

						            $string_totalExp = "/^[0-9A-Za-z .'-]+$/";
						            if(!preg_match($string_totalExp,$total_experience)) 
						            {
						                $error_message .= "Total Experience text not valid.<br />";
						            }
						            if(!preg_match($string_exp,$addr)) 
						            {
						                $error_message .= "Address text not valid.<br />";
						            }
						            if(!preg_match($string_exp,$resume)) 
						            {
						                $error_message .= "Resume text not valid.<br />";
						            }

						            $number_exp = "/^[0-9.-]/";
						            if(!preg_match($number_exp,$telephone)) 
						            {
						                $error_message .= "Phone Number not valid.<br />";
						            }
						            if(!preg_match($number_exp,$salary)) 
						            {
						                $error_message .= "Salary text not valid.<br />";
						            }
						            
						            if(strlen($error_message) > 0) 
						            {
						                died($error_message);
						            }
						         
						            $email_message = "Form details below.\n\n";
						         
						            function clean_string($string) 
						            {
						              $bad = array("content-type","bcc:","to:","cc:","href");
						              return str_replace($bad,"",$string);
						            }
						            
						            $email_message .= "Post applying for : ".clean_string($postApplying)."\n";
						            $email_message .= "Name of the Candidate : ".clean_string($full_name)."\n";
						            $email_message .= "Educational Qualification : ".clean_string($qualification)."\n";
						            $email_message .= "Area of Expertise : ".clean_string($area_of_ex)."\n";
						            $email_message .= "Total Experience : ".clean_string($total_experience)."\n";
						            $email_message .= "Address : ".clean_string($addr)."\n";
						            $email_message .= "Phone Number : ".clean_string($telephone)."\n";
						            $email_message .= "Email : ".clean_string($email_from)."\n";
						            $email_message .= "Current Salary (per annum) : ".clean_string($salary)."\n";
						            $email_message .= "Paste your Resume : ".clean_string($resume)."\n";
						         
						            // create email headers
						             
						            $headers = "From: ".$email_from."\r\n".
						             
						            "Reply-To: ".$email_from."\r\n" .
						             
						            "X-Mailer: PHP/" . phpversion();
						             
						            @mail($email_to, $email_subject, $email_message, $headers); 
						             
						            ?>
						            <br/><br/>
						            Thank you for contacting us. We will be in touch with you very soon.
						         
						            <?php
						             
						        }
						        else
						        {
						        ?>
						            <br/>
						            <br/>
						            <form class="form-horizontal carrersForm" name="contactform" method="post">
										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputPost">Post applying for</label>
											<span>:</span>	    
											<div class="controls">
						<!-- postApplying -->	<input type="text" id="inputPost" name="postApplying">
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputName">Name of the Candidate</label>
											<span>:</span>
											<div class="controls">
						<!-- full_name -->		<input type="text" id="inputName" name="full_name">
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputEdu">Educational Qualification</label>
											<span>:</span>
											<div class="controls">
						<!-- qualification -->	<input type="text" id="inputEdu" name="qualification">
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputExpertise">Area of Expertise</label>
											<span>:</span>
											<div class="controls">
						<!-- area_of_ex -->		<input type="text" id="inputExpertise" name="area_of_ex">
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputExp">Total Experience</label>
											<span>:</span>
											<div class="controls">
						<!-- total_experience -->	<input type="text" id="inputExp" name="total_experience">
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputAddrs">Address</label>
											<span>:</span>
											<div class="controls">
						<!-- addr -->			<textarea rows="3"  id="inputAddrs" name="addr"></textarea>
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputPhone">Phone Number</label>
											<span>:</span>
											<div class="controls">
						<!-- telephone -->		<input type="text" id="inputPhone" name="telephone">
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputEmail">Email</label>
											<span>:</span>
											<div class="controls">
						<!-- email -->			<input type="text" id="inputEmail" name="email">
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputSalary">Current Salary (per annum)</label>
											<span>:</span>
											<div class="controls">
						<!-- salary -->			<input type="text" id="inputSalary" name="salary">
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputResume">Paste your Resume</label>
											<span>:</span>
											<div class="controls">
						<!-- resume -->			<textarea rows="3" cols="50" id="inputResume" name="resume"></textarea>
											</div><!-- controls -->
										</div><!-- control-group -->

										<div class="control-group animated fadeInRight de8ms">
											<label class="control-label" for="inputResume">&nbsp;</label>
											<span style="color:#fff">:</span>
											<div class="controls">
											  <input type="submit" value="Submit" name="submit" id="submitButton">
												  <input type="reset" value="Reset" name="reset">
											</div><!-- controls -->
										</div><!-- control-group -->
									</form>
						            <?php
						        }
						    ?>
						</div> <!-- businessPage -->
						
					</div><!-- span8 mainBody --> <!-- bodyContent -->
					<div class="prevArrow animated fadeInRight de8ms" href="#"></div>
					<div class="nextArrow animated fadeInLeft de8ms" href="#"></div>

					<div class="span3 aside">
						<ul class="nav nav-list iconBtn">
						    <li><a href="#" id="aside1"><i id="icon1"></i>Households</a></li>
						    <li><a href="#" id="aside2"><i id="icon2"></i>Farmers &amp; Landowners</a></li>
						    <li><a href="#" id="aside3"><i id="icon3"></i>Communities</a></li>
						    <li><a href="#" id="aside4"><i id="icon4"></i>Businesses</a></li>
						    <li><a href="#" id="aside5"><i id="icon5"></i>Public Voluntary Sector</a></li>
						</ul>
						<div class="urjaAdvantage">
							<h2><a href="#" id="aside6"><i id="icon6"></i>UrjaFuture<br/>Advantage</a></h2>
						</div>
						<div class="asideFooter">
							<div class="energyCon">
								<h2><a href="#" id="aside7"><i id="icon7"></i>Measure Your<br/>Energy Consumption</a></h2>
							</div>
							<ul class="nav nav-list footerList">
								<li><a href="#">News</a></li>
								<li><a href="#">Testimonials &#47; Customers</a></li>
								<li><a href="#">Photogallery</a></li								
							</ul>
						</div>
					</div><!-- span3 -->
				</div><!-- row -->

			</div><!-- container -->
			
			<div class="footerWrapper">
				<div class="servicesNav">
					<ul>
						<li><a href="#">Project Planning</a></li>
						<div class="navDivision"></div>
						<li><a href="#">Research</a></li>
						<div class="navDivision"></div>
						<li><a href="#">Feasibility Studies</a></li>
						<div class="navDivision"></div>
						<li><a href="#">Documentation</a></li>
						<div class="navDivision"></div>
						<li><a href="#">On-field Implementation</a></li>
						<div class="navDivision"></div>
						<li><a href="#">Service Back-ups</a></li>
						<div class="navDivision"></div>
						<li><a href="#">Reliability</a></li>
						<div class="navDivision"></div>
						<li><a href="#">Training</a></li>
						<div class="navDivision"></div>
						<li><a href="#">Consultancy</a></li>
					</ul>
				</div>
				<div class="navbar-static-bottom footerNavbar">
		            <div class="navbar-inner footerNavbar-inner">
						<div class="container">
							<ul class="nav nav-list footerNav">
								<li><a href="index.html">Home</a></li>
								<li><a id="aboutFtNav" href="#">About Us</a></li>
								<li><a href="#">Clean Energy</a></li>
								<li><a id="resourceFtNav" href="#">Resource Base</a></li>
							</ul>
							<ul class="nav nav-list footerNav">
								<li><a id="careersFtNav" href="careers.php">Careers</a></li>
								<li><a id="contactFtNav" href="#">Contact</a></li>
								<li><a id="blogFtNav" href="#">Blog</a></li>
							</ul>
							<address>
								<span>Urjafuture Systems (I) Pvt Ltd</span>
								<br/>Modi baug, Ganeshkhind Road, Shivajinagar,
								<br/>Pune 411 002
								<br/>Telefax: +91 20-24475025 / 24430051, 
								<br/>Mobile: 9665042105, 
								<br/>E-mail:<a href="mailto:sales@urjafuture.im">sales@urjafuture.in</a>, Website:<a href="http://www.urjafuture.in">www.urjafuture.in</a>
							</address>
							<div class="socialSprites">
								<a href=""><i class="facebook"></i></a>
								<a href=""><i class="twitter"></i></a>
								<a href=""><i class="googlePlus"></i></a>
								<a href=""><i class="linkedIn"></i></a>
							</div>
						</div> <!-- container -->
		            </div> <!-- footerNavbar-inner -->
		            <div class="copyright">
		          		<p>All rights Reserved by Urja Future_2014</p>
		          		<p>Web Site Developed by - <a href="http://inspiremultimedia.co.in">Inspiremultimedia.co.in</a></p>
	          		</div>
	          	</div>	<!-- footerNavbar -->
			</div> <!-- footerWrapper -->
	</div><!-- pageWrapper -->
	<script src="js/jquery-1.11.0.min.js"></script>
	<script src="js/bootstrap.js"></script>
	</body>
</html>