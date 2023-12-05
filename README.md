This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:




- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

- A. Nama Produk : Tracer Study SIG (TASIG)
B. Deskripsi Produk :  Tracer Study menggunakan React Native didasarkan pada kebutuhan mendesak untuk memahami dan melacak perjalanan karir para alumni setelah menyelesaikan pendidikan mereka. Dalam era dinamis di mana tantangan dan peluang di dunia kerja terus berkembang, institusi pendidikan memiliki tanggung jawab untuk memastikan bahwa kurikulum mereka relevan dan mempersiapkan siswa dengan keterampilan yang diperlukan untuk sukses di lapangan pekerjaan. Tracer Study menjadi instrumen yang sangat penting dalam mendapatkan wawasan tentang sejauh mana lulusan dapat berhasil memasuki dan berkontribusi dalam dunia kerja. Melalui aplikasi Tracer Study yang dikembangkan dengan menggunakan teknologi React Native, kami bertujuan untuk menciptakan sarana yang nyaman dan efektif bagi para alumni untuk berbagi informasi tentang pengalaman kerja mereka.
C. Komponen Pembangun Produk : Fitur utama aplikasi mencakup pembuatan profil alumni yang mendalam, yang mencakup pengalaman kerja, prestasi, dan keterampilan yang diperoleh. Aplikasi juga akan mengirimkan survei periodik kepada alumni untuk mendapatkan pembaruan tentang status pekerjaan dan perkembangan karir mereka. Data yang terkumpul kemudian dapat diakses melalui antarmuka analisis, memberikan institusi pendidikan pemahaman yang lebih baik tentang sejauh mana kurikulum mereka memenuhi tuntutan industri. Selain manfaat langsung bagi institusi pendidikan, proyek ini juga menjadi kesempatan untuk mengembangkan dan mengasah keahlian dalam pengembangan React Native. Penggunaan teknologi ini memungkinkan pengembangan aplikasi yang dapat diakses oleh pengguna Android dan iOS, sambil memberikan fleksibilitas dan efisiensi dalam proses pengembangan.
D. Sumber Data : Aplikasi Tracer Study dengan Sistem Informasi Geografis (SIG) di atas, Anda akan memerlukan beberapa sumber data yang relevan. Berikut adalah beberapa sumber data yang dapat digunakan untuk mendukung fungsionalitas aplikasi Tracer Study dengan fokus pada lokasi geografis:

Data Alumni:

Informasi pribadi seperti nama, alamat, dan kontak.
Data akademis termasuk program studi, tahun lulus, dan prestasi akademis.
Detail pekerjaan saat ini atau sebelumnya, termasuk nama perusahaan, posisi, dan industri.
Data Pekerjaan dan Industri:

Informasi tentang perusahaan atau organisasi, termasuk lokasi geografisnya.
Data industri yang mungkin melibatkan klasifikasi berdasarkan sektor ekonomi.
Deskripsi pekerjaan dan tanggung jawab yang dapat membantu dalam pemetaan keahlian.
Data Lokasi:

Data geografis yang mencakup lokasi kampus, lokasi alumni, dan tempat-tempat di mana mereka bekerja.
Peta kota atau wilayah yang menunjukkan distribusi alumni.
Data Survei:

Hasil survei periodik yang mencakup pertanyaan tentang lokasi, mobilitas geografis, dan kesesuaian antara pendidikan dan pekerjaan.
Data Statistik Pekerjaan:

Statistik pekerjaan dan keadaan pasar kerja di daerah atau industri tertentu.
Data upah dan tingkat pekerjaan untuk berbagai profesi.
Data GIS dan Peta:

Peta wilayah yang mencakup batas administratif, infrastruktur, dan elemen geografis lainnya.
Data SIG yang mendukung fungsionalitas pemetaan, seperti koordinat geografis alumni dan lokasi pekerjaan.
Data Historis:

Data historis tentang tren pekerjaan dan perekonomian di daerah tertentu.
Data historis perkembangan karir alumni dari survei sebelumnya.
Data Skill dan Keahlian:

Informasi tentang keterampilan khusus yang dimiliki alumni, yang dapat membantu dalam mengidentifikasi tren dan kebutuhan pasar kerja.
Data Ekonomi Daerah:

Informasi ekonomi daerah yang dapat memengaruhi peluang pekerjaan, pertumbuhan industri, dan kesejahteraan ekonomi.
Data Kepuasan Alumni:

Hasil survei kepuasan alumni terhadap pendidikan yang mereka terima.
Umpan balik yang dapat membantu dalam perbaikan kurikulum dan layanan pendidikan.


![Screenshot 2023-12-05 005233](https://github.com/hajir123/pgpbl-12/assets/112599351/adbfd8a1-5593-4dd3-a3b6-e9328d1d4c54)

