
import React, { useState } from 'react';
import Footer from '../Footer';
import AlertMessage from '../alertMessage'; // تأكد من تعديل المسار وفقًا لمكان الملف

const SubcribeSection = () => {
  const [showAlert, setShowAlert] = useState(false); // حالة للتحكم في ظهور رسالة التنبيه

  const handleSubscribe = () => {
    const email = localStorage.getItem('email');
    
    if (email) {
      // إذا كان المستخدم مسجل الدخول، توجيه إلى صفحة الهوم
      window.location.href = '/Articles';
    } else {
      // إذا لم يكن المستخدم مسجل الدخول، إظهار رسالة التنبيه والبقاء في نفس الصفحة
      setShowAlert(true);
    }
  };

  return (
    <div className='text-light'>
      <div className="container pt-5 mt-5">
        <div className="text-center pt-5">
          <h1>Subscribe to our newsletter</h1>
          <p className='txt'>Be the first to get the latest news</p>
        </div>
      </div>

      <div className="container">
        <div className="text-center py-4 mb-5">
          <div className="d-flex justify-content-center">
            <div className="content w-50 py-3">
              {/* مكان لمدخل البريد الإلكتروني أو أي محتوى آخر */}
            </div>
            <div>
              <button
                className='btn1 py-3 px-5 rounded-0 round text-white fs-3'
                onClick={handleSubscribe} // استدعاء دالة الاشتراك عند الضغط
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* رسالة التنبيه */}
      <div className='text-white overLay position-relative'>
      {showAlert && <AlertMessage message="Please login to subscribe" />}
      </div>

      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default SubcribeSection;
