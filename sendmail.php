<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ua', 'phpmailer/language');

$mail->setFrom('anton.kozhukhar@gmail.com', 'Anton Kozhukhar');
$mail->addAddress('anton4k456@gmail.com');
$mail->Subject = 'Test';

if (trim(!empty($_POST['userName']))) {
  $body .= '<p><strong>Ім\'я:</strong> ' . $_POST['userName'] . '</p>';
}
if (trim(!empty($_POST['userEmail']))) {
  $body .= '<p><strong>Пошта:</strong> ' . $_POST['userEmail'] . '</p>';
}
if (trim(!empty($_POST['userText']))) {
  $body .= '<p><strong>Повідомлення</strong> ' . $_POST['userText'] . '</p>';
}
// $body .= '<p><strong>Ім\'я:</strong> ' . $_POST['userName'] . '</p>';
// $body .= '<p><strong>Пошта:</strong> ' . $_POST['userEmail'] . '</p>';
// $body .= '<p><strong>Повідомлення</strong> ' . $_POST['userText'] . '</p>';

$mail->Body = '<p><strong>Ім\'я:</strong> ' . $_POST['userName'] . '</p>';

if (!$mail->send()) {
  $message = 'Error';
} else {
  $message = 'Ok';
}

$response = ['message' => $message];
