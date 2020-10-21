<?php
     if(isset($_POST['btn-send'])){
		 
		$Username=$_POST['Username'];
		$Email=$_POST['Email'];
		$Subject=$_POST['Subject'];
		$Message=$_POST['Message'];
		
		if( empty($Email) || empty($Subject) || empty($Message)){
			
			header('location:index.php?error#contact-section');
		}else{
			$to="usamaperwaiz61@gmail.com";

             if(mail($to,$Subject,$Message,$Email)){
				 header('location:index.php?success#contact-section');
			 }
		}
	 }else{
		 header('location:index.php');
	 }
?>