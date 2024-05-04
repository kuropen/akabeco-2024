import Alpine from 'alpinejs';

Object.assign(window, {Alpine});

// 日本語環境か確認する
const isJapanese = navigator.language.startsWith('ja');

document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        isJapanese,
    }));
});

Alpine.start();
