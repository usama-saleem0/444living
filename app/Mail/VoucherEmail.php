<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VoucherEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

     public $email;
     public $userId;
     public $token;
     public $percent;
    public function __construct($email, $userId, $token, $percent)
    {
        // dd($token);
        $this->email = $email;
        $this->userId = $userId;
        $this->token = $token;
        $this->percent = $percent;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->view('Mails.voucher')
        ->subject('Verify Email');
    }
}
