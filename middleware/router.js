export default function({ route, redirect }) {

  if (route.fullPath === "/") {
    return redirect('/home')
  }
  if (route.fullPath === "/user") {
    return redirect('/user/dashboard')
  }
  if (route.fullPath === "/technician") {
    return redirect('/technician/dashboard')
  }
  if (route.fullPath === "/service-provider") {
    return redirect('/service-provider/dashboard')
  }
  if (route.fullPath === "/service-provider/settings") {
    return redirect('/service-provider/settings/general')
  }
  if (route.fullPath === "/user/settings") {
    return redirect('/user/settings/general')
  }
  if (route.fullPath === "/user/cart") {
    return redirect('/user/cart/overview')
  }
  if (route.fullPath === "/user/order-tracking") {
    return redirect('/user/order-tracking/making-product')
  }
  if (route.fullPath === "/user/pro") {
    return redirect('/user/pro/electronics')
  }
  if (route.fullPath === "/technician/cover") {
    return redirect('/technician/cover/add-part')
  }
}
