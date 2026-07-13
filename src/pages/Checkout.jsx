function Checkout() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Booking Summary
        </h2>

        <p>Event: Coldplay Live</p>

        <p>Date: 25 Aug 2026</p>

        <p>Seats: A1, A2</p>

        <p className="text-2xl font-bold mt-6">
          Total: ₹3998
        </p>

        <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg">
          Proceed to Payment
        </button>

      </div>

    </div>
  );
}

export default Checkout;