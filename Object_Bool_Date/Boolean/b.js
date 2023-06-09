function kiemTraNamNhuan(x) {
  check = false;
  if (x % 4 == 0) {
    if (x % 100 == 0) {
      if (x % 400 == 0) {
        check = true;
      }
    } else check = true;
  }
  console.log(check);
}
// kiemTraNamNhuan(1999);
// kiemTraNamNhuan(2000);
// kiemTraNamNhuan(2002);
// kiemTraNamNhuan(2004);
