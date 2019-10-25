export default function ({ route, redirect }) {
  if (route.fullPath === "/user/settings") {
    return redirect('/user/settings/general')
  }
  if (route.fullPath === "/user/blog") {
    return redirect('/user/blog/list')
  }
  if (route.fullPath === "/user/cart") {
    return redirect('/user/cart/overview')
  }
}
