self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'K-Aura Academy';
    const options = {
        body: data.body || 'لديك رسالة جديدة',
        icon: 'https://z-cdn-media.chatglm.cn/files/ae4f5a11-fb9a-49d8-841b-d8e8aa21a59d.jpeg',
        badge: 'https://z-cdn-media.chatglm.cn/files/ae4f5a11-fb9a-49d8-841b-d8e8aa21a59d.jpeg'
    };
    event.waitUntil(self.registration.showNotification(title, options));
});