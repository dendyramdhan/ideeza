export default function ({ route, redirect }) {
  if (route.fullPath === "/user/settings") {
    return redirect('/user/settings/general')
  }
}
