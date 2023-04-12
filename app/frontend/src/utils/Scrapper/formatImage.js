function formatImage(category, link) {
  if (category === 'geladeira' && link.startsWith('data:image')) {
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-9zgcjJE3C5kfdIJiBRb88cqkf1dcgQ_Pw&usqp=CAU';
  }

  if (category === 'celular' && link.startsWith('data:image')) {
    return 'https://cdn-icons-png.flaticon.com/512/0/191.png';
  }

  if (category === 'tv' && link.startsWith('data:image')) {
    return 'https://w7.pngwing.com/pngs/573/1018/png-transparent-white-tv-illustration-television-android-tv-logo-old-tv-love-text-rectangle-thumbnail.png';
  }

  return link;
}

module.exports = formatImage;
