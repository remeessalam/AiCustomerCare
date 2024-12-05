<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['fname'];
    $emailHelp = $_POST['email'];
    $phone = $_POST['phone'];
    $comments = $_POST['msg'];

    if (isset($name) && isset($phone) && isset($emailHelp)) {
        $to_email = "amna.amjad@devbunch.com";
        $vpb_message_body = nl2br("Dear Admin,\n
        The user whose detail is shown below has sent this message from ".$_SERVER['HTTP_HOST']." dated ".date('d-m-Y').".\n
        Name: ".$name."\n
        Phone: ".$phone."\n
        Email Address: ".$emailHelp."\n
        Message: ".$comments."\n
        User Ip:".getHostByName(getHostName())."\n
        Thank You!\n\n");

        // Set up the email headers
        $headers = "From: $name <$emailHelp>\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
        $headers .= "Message-ID: <".time().rand(1,1000)."@".$_SERVER['SERVER_NAME'].">". "\r\n";

        if (@mail($to_email, "New Contact Form Submission", $vpb_message_body, $headers)) {
            echo json_encode(array('status' => 'Success', 'msg' => "Your email has been sent successfully! We will get back to you soon."));
        } else {
            echo json_encode(array('status' => 'error', 'msg' => "Sorry, your email could not be sent at the moment. Please try again."));
        }
    } else {
        echo json_encode(array('status' => 'error', 'msg' => "Please fill in all required fields."));
    }
}
?>
