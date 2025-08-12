# KMC Student Committee Website 🎓

A modern, responsive website for the Kathmandu Model College Student Committee, showcasing our clubs, activities, and student achievements.

## ✨ Features

### 🎨 Modern Design
- **Contemporary UI/UX** with clean, professional design
- **Responsive layout** that works perfectly on all devices
- **Smooth animations** using AOS (Animate On Scroll) library
- **Modern color scheme** with carefully chosen typography
- **Accessibility-focused** design following best practices

### 🏛️ Club Management
- **12 Dynamic Clubs** with dedicated pages for each
- **Interactive club cards** with hover effects and icons
- **Detailed club information** including activities, members, and projects
- **Easy navigation** between different club sections

### 🖼️ Advanced Gallery
- **Filterable image gallery** with category-based sorting
- **Lightbox integration** for enhanced image viewing
- **Lazy loading** for optimized performance
- **Modern grid layout** with smooth transitions

### 📱 User Experience
- **Fixed navigation** with scroll effects
- **Smooth scrolling** to sections
- **Back-to-top button** for easy navigation
- **Loading animations** and interactive elements
- **Contact forms** with validation
- **Mobile-first approach**

### ⚡ Performance
- **Optimized assets** and modern CSS
- **Fast loading times** with efficient code
- **SEO-friendly** structure and meta tags
- **Progressive Web App** features ready

## 🚀 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5.3** - Responsive framework
- **Font Awesome 6** - Modern icons
- **AOS Library** - Scroll animations
- **GLightbox** - Image lightbox
- **Google Fonts** - Typography (Inter & Poppins)

## 📁 Project Structure

```
KMC/
├── css/
│   ├── bootstrap.min.css
│   ├── modern-style.css          # Main modern stylesheet
│   ├── style.css                 # Legacy styles
│   └── gallery.css
├── js/
│   ├── bootstrap.min.js
│   ├── modern-script.js          # Main JavaScript file
│   ├── function.js
│   ├── gallery.js
│   ├── jquery.js
│   └── js.js
├── img/                          # Image assets
│   ├── computerclub/
│   ├── roboticsclub/
│   ├── musicclub/
│   ├── danceclub/
│   ├── executive/
│   ├── presidents/
│   └── ...
├── images/                       # Additional images
├── index_new.html               # Modern homepage
├── gallery_new.html             # Modern gallery page
├── computerclub_new.html        # Modern club page template
├── index.html                   # Legacy homepage
├── gallery.html                 # Legacy gallery
├── nav.html                     # Navigation component
├── footer.html                  # Footer component
└── README.md
```

## 🎯 Key Pages

### 🏠 Homepage (`index_new.html`)
- **Hero carousel** with call-to-action buttons
- **About section** with statistics and mission
- **Clubs overview** with interactive cards
- **Executive team** showcase
- **Upcoming events** section
- **Contact form** with validation

### 🖼️ Gallery (`gallery_new.html`)
- **Filterable gallery** (Events, Clubs, Academic, Cultural, Sports)
- **Lightbox functionality** for image viewing
- **Load more** feature for pagination
- **Responsive grid** layout

### 💻 Club Pages (`computerclub_new.html`)
- **Club hero section** with branding
- **Activities and programs** overview
- **Project showcase** with tech stacks
- **Team members** presentation
- **Join club** call-to-action

## 🎨 Design System

### Color Palette
- **Primary**: `#2563eb` (Blue)
- **Primary Dark**: `#1d4ed8`
- **Secondary**: `#f59e0b` (Amber)
- **Accent**: `#10b981` (Emerald)
- **Dark**: `#1f2937`
- **Light**: `#f8fafc`

### Typography
- **Primary Font**: Inter (Clean, modern sans-serif)
- **Secondary Font**: Poppins (For headings and emphasis)

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Modern with hover animations
- **Forms**: Floating labels with focus states
- **Navigation**: Fixed with transparency effects

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: ≥ 1200px

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kmc-student-committee.git
   cd kmc-student-committee
   ```

2. **Open the project**
   - Open `index_new.html` in your browser for the modern version
   - Or use a local server for better development experience

3. **For development**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🔧 Customization

### Adding New Clubs
1. Create a new HTML file based on `computerclub_new.html`
2. Update the club information, colors, and content
3. Add the club to the navigation and homepage club grid
4. Include relevant images in the `img/` folder

### Modifying Styles
- Edit `css/modern-style.css` for styling changes
- Use CSS custom properties for consistent theming
- Follow the existing naming conventions

### Adding Content
- Update sections in `index_new.html` for homepage changes
- Add new images to appropriate folders
- Update team member information in the executive section

## 📊 Features Overview

| Feature | Legacy | Modern | Description |
|---------|--------|---------|-------------|
| Design | ❌ | ✅ | Contemporary, professional UI |
| Responsive | ⚠️ | ✅ | Mobile-first, all devices |
| Performance | ⚠️ | ✅ | Optimized, fast loading |
| Animations | ❌ | ✅ | Smooth, engaging transitions |
| Gallery | ✅ | ✅ | Enhanced with filtering |
| Navigation | ✅ | ✅ | Improved UX and animations |
| Accessibility | ⚠️ | ✅ | WCAG guidelines followed |
| SEO | ⚠️ | ✅ | Structured data and meta tags |

## 🎯 Future Enhancements

- [ ] **Content Management System** integration
- [ ] **Event calendar** with booking functionality
- [ ] **Student portal** with authentication
- [ ] **Blog section** for news and updates
- [ ] **Progressive Web App** features
- [ ] **Multi-language support**
- [ ] **Dark mode** toggle
- [ ] **Advanced search** functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**KMC Student Committee**
- 📧 Email: info@kmcstudentcommittee.com
- 🌐 Website: [KMC Student Committee](https://kmcstudentcommittee.com)
- 📍 Address: Kathmandu Model Secondary School, Kathmandu, Nepal

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Bootstrap Team** for the amazing framework
- **Font Awesome** for the comprehensive icon library
- **AOS Library** for smooth scroll animations
- **Google Fonts** for beautiful typography
- **All club members** who contributed content and feedback

---

**Made with ❤️ by KMC Student Committee**

*Empowering students through technology and innovation*