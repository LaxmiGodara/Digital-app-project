<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inventory Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">

  <!-- Header -->
  <header class="bg-blue-900 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">Inventory Dashboard</h1>
    <button class="bg-white text-blue-900 px-4 py-2 rounded">Logout</button>
  </header>

  <!-- Main Layout -->
  <div class="flex flex-col md:flex-row min-h-screen">

    <!-- Sidebar -->
    <aside class="bg-white shadow-md md:w-64 w-full p-4 space-y-2">
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Dashboard</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Products</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Customers</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Suppliers</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Purchase Order</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">GRN</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Sales Order</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Invoice</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Transactions</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Reports</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-blue-100">Settings</a>
    </aside>

    <!-- Content -->
    <main class="flex-1 p-6">
      <h2 class="text-2xl font-bold mb-4">Welcome to Inventory App</h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white p-4 shadow rounded">Total Stock: 3500 kg</div>
        <div class="bg-white p-4 shadow rounded">Today’s Sales: ₹12,000</div>
        <div class="bg-white p-4 shadow rounded">Pending Invoices: 5</div>
      </div>
    </main>
  </div>

</body>
</html>