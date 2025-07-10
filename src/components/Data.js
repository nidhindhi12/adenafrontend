import { BiSolidDashboard } from "react-icons/bi";
import { PiShoppingBagFill } from "react-icons/pi";
import { MdProductionQuantityLimits, MdCategory, MdFestival } from "react-icons/md";
import { LuUsers, LuCircleUser, LuMessageSquareText } from "react-icons/lu";
import { GiMetalBar } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";

//#region signup field
export const signupfield = [
  [
    { type: "text", placeholder: "First Name", name: "firstname" },
    { type: "text", placeholder: "Last Name", name: "lastname" }
  ],
  [
    { type: "text", placeholder: "Phone Number", name: "phonenumber" },
    { type: "password", placeholder: "Password", name: "password" }
  ],
  [
    { type: "email", placeholder: "Email Id", name: "email", }
  ]
];
//#endregion
//#region loginflied 
export const loginfield = [
  [
    { type: "email", placeholder: "Email Id", name: "email" }
  ],
  [
    { type: "password", placeholder: "Password", name: "password" }
  ]
]
//#endregion
//#region sidebar
export const adminnavbar = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    icon: BiSolidDashboard
  },
  {
    name: 'User',
    path: '/admin/user',
    icon: LuUsers
  },
  {
    name: 'Orders',
    path: '/admin/orders',
    icon: PiShoppingBagFill
  },
  {
    name: 'Products',
    path: '/admin/products',
    icon: MdProductionQuantityLimits,

  },
  {
    name: 'Category',
    path: '/admin/category',
    icon: MdCategory
  },
  {
    name: 'Metal',
    path: '/admin/metal',
    icon: GiMetalBar
  },
  {
    name: 'Ocassion',
    path: '/admin/ocassion',
    icon: MdFestival
  }
]
//#endregion
//#region  admindropdown
export const admindropdown = [
  {
    name: 'My profile',
    path: '/admin',
    icon: LuCircleUser
  },
  {
    name: 'My tasks',
    path: '/admin',
    icon: FaTasks
  },


]
//#endregion

//#region customer service
export const customerservice = [
  {
    name: "Faq",
    path: '/'
  },
  {
    name: "Size guide",
    path: '/'
  },
  {
    name: "Shipping",
    path: '/'
  },
  {
    name: "Order status",
    path: '/'
  },
  {
    name: "Exchange",
    path: '/'
  }
]
//#endregion

// about us

export const aboutus = [
  {
    name: "Our Shops",
    path: '/'
  },
  {
    name: "Size guide",
    path: '/'
  },
  {
    name: "Shipping",
    path: '/'
  },
  {
    name: "Order Status",
    path: "/"
  },
  {
    name: "exchanges",
    path: '/'
  }
]
export const chartOptions = {
  chart: {
    id: 'orders-line-chart',
    toolbar: { show: false },
    sparkline: { enabled: true } //
  },
  colors: ['#d5dcf6', '#2b5198'],
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 0
    }
  },
}
export const chartSeries = [
  {
    name: 'Completed',
    data: [35, 45, 30, 50, 40]
  },
  {
    name: 'Pending',
    data: [15, 20, 26, 25, 50]
  }
]
export const chartAreaOptions = {
  chart: {
    type: 'area',
    stacked: false,
    toolbar: { show: false }
  },
  colors: ['#00E396', '#0090FF'], // Green & Blue for contrast
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yaxis: {
    title: {
      text: 'Sales (₹)'
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: (val) => `₹ ${val}`
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right'
  }
};

export const chartAreaSeries = [
  {
    name: 'Current Year',
    data: [12000, 15000, 11000, 19000, 16000, 20000, 11000, 22000]
  },
  {
    name: 'Previous Year',
    data: [10000, 15000, 12000, 16000, 19700, 17000, 15000, 18000]
  }
];

export const chartLineOptions = {
  chart: {
    id: 'orders-line-chart',
    toolbar: { show: false },
    sparkline: { enabled: true } //
  },
  colors: ['#d5dcf6', '#2b5198'],
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 0
    }
  },
}
export const chartLineSeries = [
  {

    data: [35, 145, 155, 80, 40]
  },
  {

    data: [50, 200, 55, 176, 150]
  }
]

export const headerdata = ["All Jewellery", "Gold", "Diamond", "Earrings", "Rings", "Daily Wear", "Wedding"];
export const paymentdata = ['Cash Delivery', "UPI ID", "EMI Payments", "Debit Card", "Credit Card"];


