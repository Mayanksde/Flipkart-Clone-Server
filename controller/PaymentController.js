import crypto from 'crypto'
import  Razorpay from 'razorpay'
import dotenv from 'dotenv';

dotenv.config();

const instance=new Razorpay({
    key_id:process.env.RAZORPAY_KEY,
    key_secret:process.env.RAZORPAY_SECRET
})

export const capturePayment = async (req, res) => {
    console.log("capture payment")
  const { total_amount } = req.body

  const options = {
    amount: total_amount * 100,
    currency: "INR",
    receipt: Math.random(Date.now()).toString(),
  }

  try {
    const paymentResponse = await instance.orders.create(options)
    res.json({
      success: true,
      data: paymentResponse,
    })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ success: false, message: "Could not initiate order." })
  }
}
