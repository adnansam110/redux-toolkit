import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
} from "./store/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const [form, setForm] = useState({
    inputText: "",
    translatedText: "",
  });
  // useEffect(() => {
  //   fetchUsers();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const fetchUsers = async () => {
    dispatch(getUsers());
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(getUsersSuccess(users.data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };

  const translateText = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append(
      "q",
      JSON.stringify({
        organization_name: "مركز استنارة للرعاية الطبية",
        login_signup: "تسجيل الدخول/ انشاء حساب",
        login: "تسجيل الدخول",
        sign_up: "تسجيل حساب جديد",
        no_consultant_message: "لم يتم العثور على مستشار!",
        search_text: "ابحث عن مستشار",
        search: {
          choose_a_category: "اختيار الفئة",
        },
        consultants_notes: {
          new_note: "ملاحظة جديدة",
          title_here: "العنوان هنا",
          type_your_message: "اكتب رسالتك",
          title: "لقب",
          description: "وصف",
          no_notes_found: "لم يتم العثور على ملاحظات",
          title_required: "العنوان مطلوب",
          description_required: "الوصف مطلوب",
          make_some_change_in_notes: "قم بإجراء بعض التغيير في الملاحظات",
          no_internet: "لا انترنت",
        },
        consultant_profile: {
          experience: "الخبرة",
          fee: "السعر",
          reviews: "التعليقات",
          view_all: "عرض الكل",
          book_an_appointment: "حجز موعد",
          load_more: "تحميل المزيد",
          no_reviews: "لا يوجد تعليقات",
        },
        call_will_be_available_on: "سوف يكون الاتصال متاح في",
        instant_booking_call_available: "ستبدأ جلستك في",
        write_a_message: "اكتب رساله",
        at: "في",
        cannot_make_a_call: "لا يمكن إجراء اتصال خارج موعد الجلسة",
        cannot_make_another_call: "لا يمكن إجراء اتصال اثناء وجود اتصال قائم",
        delete_account_call_in_progress: "لا يمكن حذف الحساب خلال الجلسة",
        cannot_switch: "لا يمكن تعطيل المحادثة قبل انتهاء الجلسة",
        cannot_open_whatsapp: "لا يمكن فتح whatsapp",
        cannot_open_store: "لا يمكن فتح المتجر",
        request_pending: "تم ارسال طلبك",
        request_decline: "عذرا، لا يوجد شاغر",
        no_notifications: "لا يوجد إشعارات",
        chat_closed: "انتهت مدة المحادثة",
        buttons: {
          continue: "استمرار",
          reset_password: "إعادة تعيين كلمة المرور",
          get_started: "إبدأ",
          create_account: "إنشاء حساب",
          send_otp: "ارسل رمز التحقق",
          continue_with_your_mobile: "التسجيل برقم الجوال",
          submit: "تقديم الطلب",
          okay: "تم",
          rate_now: "قيم الجلسة",
          confirm: "تأكيد",
          pay: "الدفع",
          update: "تحديث",
          yes: "نعم",
          no: "لا",
          reschedule: "إعادة جدولة",
          done: "تم",
          go_back: "العودة",
          pay_via_wallet: "ادفع عن طريق المحفظة",
          later: "لاحقا",
          never: "لا",
          try_again: "اعد المحاولة",
          reset: "إعادة ضبط",
          save: "حفظ",
          start_chat: "ابدأ المحادثة",
          add_note: "اضف ملاحظة",
          delete: "حذف",
          contact_whatsapp: "الاتصال واتساب",
          add_medicine: "إضافة علاج",
          add: "إضافة ",
          generate_prescription: "إصدار الوصفة",
          delete_account: "حذف الحساب",
          join_session: "انضم للجلسة",
          chat: "محادثة",
          archive: "أرشيف",
          add_prescription: "إضافة وصفة",
          add_diagnosis: "أضف التشخيص",
          create_report: "إنشاء التقرير",
          generate_report: "انشئ التقرير",
          update_report: "حدث التقرير",
          start_now: "ابدأ الان",
          instant_call: "حجز فوري",
          tax_free_payment: "دفع معفاة من الضرائب",
          rate_your_session: "قيم جلستك",
          join_session_now: "انظم الان",
          join_session_later: "انظم لاحقا",
          leave_room: "مغادرة الجلسة",
        },
        authScreensText: {
          do_not_have_account: "ليس لديك حساب؟",
          have_account: "هل لديك حساب؟",
          terms_service: "الشروط والأحكام",
          terms_and_condition: "الشروط والأحكام",
          enter_phone_text: "ادخالي رقم الجوال او البريد الالكتروني يعني...",
          phone_email_receive_opt_code:
            "ادخل رقم الجوال او البريد الالكتروني لاستلام رمز التحقق",
          enter_phone_tag_line_start: "بالضغط على 'استمرار' انت توافق على ",
          enter_phone_tag_line_end: "في استخدام تطبيق استنارة",
          privacy_policy: "سياسة الخصوصية",
          enter_code: "ادخل الرمز الخاص بك",
          verification_text:
            "عن طريق النقر على 'البدء' أنت توافق على الشروط والأحكام و سياسة الخصوصية",
          cant_receive_sms: "لم يتم استلام رمز التحقق",
          resend_code: "إعادة إرسال",
          and: "و",
          welcome: "مرحبًا",
          login_text: "رحلتك لحياة أسعد وأكثر إيجابية تبدأ هنا",
          forgot_password: "هل نسيت كلمة المرور؟",
          reset_password_text:
            " أدخل كلمة المرور الجديدة أدناه. يجب أن تتكون من ٨ خانات على الأقل ",
          register_text:
            "خصوصيتك تهمنا لن يتم مشاركة معلوماتك الشخصية مع شركات التسويق",
          wait: "انتظر",
          remember_password: "تذكرت كلمة المرور",
          forgot_password_text_start: "ادخل",
          forgot_password_text_end:
            "وسنرسل لك رمز التحقق لإعادة تعيين كلمة المرور الخاصة بك",
          creating_account_text: "إنشاء حساب يعني موافقتك على",
          or: "أو",
          phone_number: "رقم الجوال",
          email: "بريد الالكتروني",
        },
        errorText: {
          about_you_required: "عنك مطلوب",
          brand: "طريقة الدفع مطلوبة",
          account_number: "رقم البطاقة مطلوب",
          account_holder: "اسم حامل البطاقة مطلوب",
          expiry_date: "تاريخ الانتهاء مطلوب",
          cvv: "رمز الامان مطلوب",
          invalid_account_number: "رقم البطاقة غير صحيح",
          password_length:
            "كلمة المرور يجب ان تحتوي على ثمان خانات على الاقل وان تحتوي على حروف وارقام",
          password_not_match: "كلمة السر غير مطابقة",
          confirm_password_not_match: "يجب أن تكون كلمة المرور متطابقة",
          password_required: "كلمة المرور مطلوبة",
          old_password_required: "كلمة المرور القديمة مطلوبة",
          confirm_password_required: "تأكيد كلمة المرور مطلوبة",
          name_required: "اللقب مطلوب",
          name_min_required: "يجب أن يكون الاسم المستعار على الأقل 3 أحرف",
          invalid_email: "البريد الإلكتروني المدخل غير صحيح",
          email_required: "البريد الإلكتروني مطلوب",
          id_number_required: "رقم الهوية مطلوب",
          invalid_id_number: "رقم الهوية غير صحيح",
          last_qualification_required: "المؤهل الأخير مطلوب",
          last_qualification_name_required: "مسمى المؤهل",
          last_qualification_name_error:
            "يجب أن يكون اسم المؤهل أقل من 40 حرفًا أو مساويًا لها",
          phone_required: "رقم الجوال مطلوب",
          invalid_phone: "رقم الجوال المدخل غير صحيح",
          age_required: "العمر مطلوب",
          greater_experience: "الخبرة أكبر من تاريخ الميلاد",
          invalid_code: "الرمز المدخل غير صحيح ",
          something_went_wrong: "ناسف يوجد خطأ",
          password_mismatch: "كلمة المرور غير مطابقه",
          new_password_required: "كلمة المرور الجديدة مطلوبة",
          first_name_required: "الاسم الأول مطلوب",
          first_name_min_required:
            "يجب أن يتكون الاسم الأول من 3 أحرف على الأقل",
          last_name_required: "اسم العائلة مطلوب",
          last_name_min_required:
            "يجب أن يتكون اسم العائلة من 3 أحرف على الأقل",
          experience_required: "الخبرة مطلوبة",
          rate_required: "السعر مطلوب",
          speaking_language_required: "مطلوب لغة التحدث",
          about_me_required: "مجالات العمل مطلوبة",
          consultation_type_required: "مطلوب نوع الاستشارة",
          open_and_closing_message_required:
            "كل من الرسالة الافتتاحية والختامية مطلوبة",
          opening_message_required: "مطلوب الرسالة الافتتاحية",
          closing_message_required: "مطلوب الرسالة الختامية",
          fill_required_fields: "يرجى تعبئة جميع الحقول المطلوبة",
          discription_required: "المؤهلات والخبرات مطلوبة",
          invalid_experience: "يجب أن تكون الخبرة بأرقام فقط",
          invalid_experience_limit: "الخبرة لا يمكن تتجاوز 30 سنة",
          please_enter_valid_mada_card: "الرجاء إدخال رقم بطاقة مدى صالحة",
          date_of_birth_required: "تاريخ الميلاد مطلوب",
          registered_profession_required: "مطلوب درجة التصنيف المهني",
          registered_profession_error:
            "يجب أن تكون درجة التصنيف أقل من أو يساوي 40 حرفا",
          registered_number_required: "مطلوب رقم التصنيف",
          registered_number_error:
            "يجب أن يكون رقم التصنيف أقل من او يساوي 40 رقما",
          enter_valid_twitter_account: "الرجاء إدخال حساب تويتر صحيح",
          other_social_media_account:
            "الرجاء ادخال حساب تواصل اجتماعي اخر ان وجد",
          registration_doc_req: "مطلوب وثيقة التصنيف",
          about_me: "مطلوب عنك",
          resume_req: "مطلوب السيرة الذاتية",
          session_hours_required: "مطلوب ادخال عدد الساعات",
          session_hours_invalid:
            "عدد الساعات المتوفرة اسبوعيا لا تتجاوز 100 ساعه ",
          session_rate_required: "مطلوب سعر الجلسة",
          session_rate_invalid:
            "سعر الجلسة لا بد ان يكون ما بين 70 الى 400 ريال",
          invalid_session_hours: "يجب أن تكون أرقام",
          something_went_wrong_with_image:
            "(بحد أقصى 10 صور) حدث خطأ في الصورة",
          file_limit_error: "لا يمكنك تحميل ملف يزيد حجمه عن 10 ميغا بايت",
          client_name: "يجب ادخال اسم العميل",
          client_name_length: "اسم العميل يجب ان يكون اكثر من 3 - 50 احرف",
          national_id: "يجب ادخال رقم الهوية",
          national_id_length: "رقم الهوية يجب ان يكون 10 ارقام او اكثر",
          diagnosis: "يجب ادخال التشخيص",
          medicine_name: "يجب ادخال اسم العلاج",
          dosage: "يجب ادخال الجرعة",
          diagnosis_length:
            "التشخيص يجب ان يكون اكثر من 5 خانات ولا يتعدى 1000 خانه",
          frequency: "يجب ادخال التكرار",
          duration: "يجب ادخال المدة",
          instruction: "يجب ادخال تعليمات الوصفة",
          age: "العمر مطلوب",
          medicine_length:
            "اسم العلاج يجب ان يكون بحد ادنى خانه واحدة و100 خانة بحد اعلى",
          dosage_length: "24 حرفًا كحد أقصى",
          frequency_length: "24 حرفًا كحد أقصى",
          duration_length: "24 حرفًا كحد أقصى",
          instruction_length: "التعليمات يجب ان تكون من 10- 150 خانات",
          invalid_age: "الرجاء إدخال عمر صالح",
          client_issue: "المشكلة مطلوبة",
          treatment_plan: "مطلوب خطة العلاج",
          cannot_exceed_more_than_one_thousand:
            "لا يمكن أن يتجاوز عدد الأحرف 1000",
          full_name: "الاسم كامل مطلوب",
          full_name_length: "الاسم يجب ان يكون ما بين ٣ الى ٥٠ حرف",
          about_patient: "معلومات عن المريض مطلوبة",
          join_room_warning:
            "اذا كنت تواجه مشكله في الاتصال الرجاء اعادة الانضمام",
        },
        labels: {
          about_you: "عنك",
          VISA: "VISA",
          MASTER: "MASTER",
          MADA: "MADA",
          ApplePay: "Apple Pay",
          STC_PAY: "STC PAY",
          brands: "طريقة الدفع",
          account_number: "رقم البطاقة",
          account_holder: "اسم حامل البطاقة",
          expiry_date: "تاريخ الانتهاء",
          cvv: "رمز الامان",
          inprogress: "قيد التنفيذ",
          password: "كلمة المرور",
          old_password: "كلمة المرور القديمة",
          confirm_password: "تأكيد كلمة المرور",
          gender: "الجنس",
          nick_name: "اللقب",
          age: "العمر",
          male: "ذكر",
          female: "أنثى",
          email_address: "البريد الالكتروني",
          first_name: "الاسم الأول",
          last_name: "الاسم الأخير",
          experience: "سنوات من الخبرة",
          contact_number: "رقم الجوال",
          consultation_type: "نوع الاستشارة",
          educational: "تربوي",
          social: "معالج اسري",
          social_therapist: "معالج إجتماعي",
          psychic: "طبيب نفسي",
          psychologist: "معالج نفسي",
          psychiatrist: "طبيب نفسي",
          family_doctor: "طبيب اسرة",
          life_coach: "لايف كوتش",
          id_number: "رقم الهوية",
          last_qualification: "آخر مؤهل",
          qualification_name: "اسم المؤهل",
          availability: "متاح",
          date_of_birth: "تاريخ الميلاد",
          change_language: "تغيير اللغة",
          english: "English",
          arabic: "العربية",
          both: "الكل",
          speaking_language: "لغة التحدث",
          session_rate: "سعر الجلسة للنصف ساعة",
          bank_account: "الحساب البنكي",
          new_password: "كلمة المرور الجديدة",
          edit: "تعديل",
          cancel: "إلغاء",
          apply: "تقديم",
          consultant: "مستشار",
          consultant_mode: "وضع التطبيق",
          client: "عميل",
          guest: "زائر",
          chat: "محادثة",
          cancelled: "ملغى",
          email_us: "راسلنا على",
          go_to_website: "انتقل إلى موقع الويب",
          visit_facebook: "قم بزيارة صفحتنا على الفيسبوك",
          rate_app: "قيم التطبيق",
          subscribe: "تسجيل",
          change_picture: "تغيير الصورة",
          close: "أغلق",
          edit_nickname: "تعديل اللقب",
          discription: "الوصف",
          visit_instagram: "انضم إلينا على انستجرام",
          visit_twitter: "انضم إلينا على تويتر",
          about_me: "عنك",
          about_yourself: "نبذه عنك",
          all: "الكل",
          year: "سنة",
          rate_minute: "ريال / 30 دقيقة",
          rate_hour: "ريال / 60 دقيقة",
          years: "سنوات",
          internet_not_connected: "لا يوجد اتصال بالإنترنت",
          booked: "حجز جديد",
          not_confirmed: "غير مؤكد",
          complete: "مكتمل",
          expiry_year: "سنة الإنتهاء",
          expiry_month: "شهر الإنتهاء",
          redirecting: "اعادة التوجية الى المحادثة",
          payment_details: "بيانات الدفع",
          payment_mode: "طريقة الدفع",
          support: "الدعم الفني",
          timezone_msg: "الأوقات الظاهرة حسب توقيتك المحلي",
          attachments: "المرفقات",
          images: "عشر صور كحد اقصوى",
          documents: "المستندات",
          gallery: "الصور",
          delete_messages: "هل أنت متأكد أنك تريد حذف كافة الرسائل؟",
          delete_message: "هل أنت متأكد أنك تريد حذف الرسالة؟",
          unattended_by_consultant: "تغيب المستشار",
          unattended_by_client: "تغيب العميل",
          audio_cancelled: "تم الغاء التسجيل",
          login_with_mobile: "رقم الجوال",
          login_with_email: "البريد الالكتروني",
          take_a_photo: "التقاط صورة",
          pick_from_library: "اختر من المكتبة",
          rate_our_app_msg:
            "كيف كانت تجربتك؟ يسعدنا ويشرفنا تقييمك في متجر التطبيقات",
          tap_to_return_to_call: "انقر للعودة للاتصال",
          cannot_record_while_in_call: "لا يمكن التسجيل أثناء المكالمة",
          no_formal_education: "لا تعليم رسمي",
          primary_education: "تعليم ابتدائي",
          secondary_education: "التعليم الثانوي",
          ged: "جد",
          vocational_qualification: "المؤهل المهني",
          bachelors_degree: "بكالوريوس",
          masters_degree: "ماجستير",
          doctorate_or_higher: "دكتوراه ",
          registered_profession_name: "المسمى حسب تصنيف هيئة التخصصات",
          registered_number: "رقم التصنيف",
          social_media_account: "حسابات التواصل الإجتماعي (اختياري)",
          work_in_other_application: "هل تعمل في تطبيق آخر؟",
          category: "فئة",
          registration_doc: "وثيقة تصنيف الهيئة",
          upload_registration_doc: "ارفع ملف التصنيف",
          resume_doc: "السيرة الذاتية",
          upload_resume_doc: "رفع السيرة الذاتية",
          read_and_agree_to_contract:
            "اطلعت على العقد واوافق على جميع الشروط والبنود",
          e_signature: "التوقيع الإلكتروني",
          currently_employed: "تعمل حاليًا؟",
          session_hours: "ساعات الاستشارة المتوقع تقديمها اسبوعيًا",
          cannot_play_when_recording: "لا يمكن تشغيل الصوت وقت التسجيل",
          qr_code_bottom_text: "اضغط على الباركود لرؤية الفاتورة على المتصفح",
          cannot_play_when_calling: "لا يمكن تشغيل الصوت وقت المكالمة",
          no_bookings_found: "لم يتم العثور على حجوزات",
          chats: "شاشة المحادثة",
          completed_bookings: "الحجوزات المكتملة",
          instant_booking: "جلسة فورية",
          next: "التالي",
          consultant_available_text: "مستشار (ق) متاح",
          instant: "فوري",
          on_vacation: "في إجازة",
          show_more: "اظهار المزيد",
          show_less: "اظهار القليل",
          booking_count: "عدد الحجوزات",
          details: "التفاصيل",
          user_information: "بيانات المستخدم",
          user_type: "نوع المستخدم",
          no_results_found: "لا توجد نتائج",
          find_your: "تجد الخاص بك",
          verified: "معتمد",
          price: "السعر",
          comments: "تعليق",
          instant_booking_details: "تفاصيل الحجز الفوري",
          book_your_consult_day: "احجز يوم استشارتك",
          session_in_5_mints: "تبدأ الجلسة خلال 5 دقائق",
          get: "احصل",
          discount: "خصم",
          message: "على حجزك الأول",
          new: "جديد",
          slide_to_cancel: "اسحب للإلفاء",
          partner_affiliation: "مستفيد",
          rate_it_on_store: "يسعدنا تقييم التطبيق في المتجر",
          minutes: "الدقائق",
          login: "تسجيل الدخول",
          upcoming_booking_id: "رقم الحجز القادم",
          book_your: "أختر يوم",
          consult_day: "جلستك",
          view_details: "التفاصيل",
          estenarh_support: "خدمة العملاء",
          we_are_here_to_help: "مرحبًا، كيف نستطيع خدمتك ؟",
          about: "عن",
          enable_instant_booking: "تفعيل الجلسات الفورية",
          prescription: "وصفة طبية",
          notes: "ملاحظات",
          reports: "التقارير",
          client_full_name: "اسم العميل الرباعي",
          national_id: "رقم الهوية",
          diagnosis: "التشخيص",
          medicine: "العلاج",
          dosage: "الجرعة",
          frequency: "التكرار",
          duration: "المدة",
          instructions: "التعليمات",
          archive: "أرشيف",
          no_of_reviews: "عدد التقييمات",
          closest_time: "أقرب وقت",
          trying_to_connect: "تحاول الاتصال...",
          waiting_for: "انتظر ل",
          to_join: "لينضم...",
          consultant_support: "خدمات المستشارين",
          client_issue: "مشكلة العميل",
          treatment_plan: "الخطة العلاجية",
          private_text: "الملاحظات هي معلومات خاصة ، فهي مرئية لك فقط",
          delete_note: "هل أنت متأكد أنك تريد حذف هذه الملاحظة؟",
          full_name: "الاسم رباعي",
          about_patient: "عن الحالة",
          by: "بواسطة",
          promo_code: "كود ترويجي",
          remove: "إزالة",
          promo_code_is_valid: "*تم تطبيق الرمز الترويجي",
          promo_code_is_invalid: "*الرمز الترويجي غير صالح",
          clear: "الغاء الفلتر",
          filter: "فلتر",
        },
        invoice: {
          status: {
            0: "قيد الانتظار",
            1: "تأكيد",
            2: "قيد التحويل",
            3: "تم التحويل",
          },
          no_of_bookings: "عدد الحجوزات",
          no_of_completed_booking: "الحجوزات المكتملة",
          total_income: "مجموع الدخل",
          commission_fee: "نسبة استنارة",
          discount: "الخصومات",
          unattended_session_cost: "رسوم عدم حضور جلسة",
          amount_to_be_transferred: "مبلغ التحويل",
          no_invoices: "لم يتم العثور على فواتير",
          invoice_id: "رقم الفاتورة",
          simplified_tax_invoice: "فاتورة ضريبية مبسطة",
        },
        months: {
          0: "يناير",
          1: "فبراير",
          2: "مارس",
          3: "ابريل",
          4: "مايو",
          5: "يونيو",
          6: "يوليو",
          7: "اغسطس",
          8: "سبتمبر",
          9: "اكتوبر",
          10: "نوفمبر",
          11: "ديسمبر",
        },
        placeholder_text: {
          account_number: "ادخل رقم البطاقة",
          account_holder: "ادخل اسم حامل البطاقة",
          expiry_date: "ادخل تاريخ الانتهاء",
          cvv: "ادخل رمر الامان",
          reset_password: "ادخل كلمة المرور",
          old_password: "ادخل كلمة المرور السابقة",
          retype_password: "أعد ادخال كلمة المرور",
          new_password: "ادخل كلمة المرور الجديدة",
          password: "ادخل كلمة المرور الخاصة بك للمتابعة",
          name: "ادخل الاسم",
          mobile: "رقم الجوال",
          email: "ادخل البريد الإلكتروني",
          age: "ادخل العمر",
          date_of_birth: "ادخل تاريخ الميلاد",
          rate: "ادخل سعر الاستشارة",
          about_me: "عنك",
          discription: "المؤهلات والخبرات",
          email_address: "البريد الالكتروني",
          first_name: "الاسم الأول",
          last_name: "الاسم الأخير",
          experience: "ادخل سنوات الخبرة",
          id_number: "أدخل رقم الهوية",
          last_qualification: "حدد آخر مؤهل",
          qualification_name: "أدخل اسم المؤهل",
          registered_profession_name: "أدخل اسم المهنة",
          registered_number: "أدخل رقم التصنيف",
          enter_twitter_account: "أدخل حساب تويتر",
          enter_other_social_media_account:
            "أدخل حساب وسائل التواصل الاجتماعي الأخرى",
          other_account: "حسابات اخرى",
          consultant_category: "اختر تصنيف",
          session_hours: "أدخل ساعاتك",
          profile_number: "رقم الملف",
          client_full_name: "ادخل اسم العميل الرباعي",
          medicine_name: "ادخل اسم العلاج",
          dosage: "ادخل الجرعة",
          frequency: "ادخل تكرار العلاج",
          duration: "ادخل المدة",
          instruction: "ادخل التعليمات",
          national_id: "ادخل رقم الهوية",
          diagnosis: "ادخل التشخيص",
          client_issue: "أدخل مشكلة العميل",
          treatment_plan: "أدخل خطة العلاج",
          full_name: "ادخل الاسم كامل",
          about_patient: "ادخل معلومات الحالة",
        },
        menu: {
          view_profile: "عرض الملف الشخصي",
          edit_profile: "تعديل الملف الشخصي",
          update_password: "تحديث كلمة المرور",
          my_wallet: "محفظتي",
          settings: "الإعدادات",
          invoices: "فواتيري",
          my_invoices: "فواتيري",
          terms_and_conditions: "الشروط والأحكام",
          about_us: "عن استنارة",
          support: "الدعم الفني",
          contact_support: "الدعم الفني",
          share_app: "مشاركة التطبيق",
          join_as_consultant: "انضم كمستشار",
          signed_a_contract: "توقيع عقد",
          logout: "تسجيل الخروج",
          general_info: "معلومات عامة",
          my_schedule: "جدولة المواعيد",
          my_auto_message: "الرسائل الافتراضية",
          close_sessions: "تعديل مواعيدي اليومية",
          booking_status_is: "حالتي",
          active: "متاح للحجز",
          inactive: "غير متاح",
          instant_booking: "جلسة فورية",
          share_app_message:
            " https://onelink.to/estenarh/احصل على تطبيق استنارة من خلال الرابط",
          privacy_policy: "سياسة الخصوصية",
          close_session: "تعديل مواعيدي اليومية",
          client_reviews: "تعليقات العملاء",
          tutorial: "مزايا استنارة",
          on_vacation: "في إجازة",
          support_chats: "خدمة العملاء",
          archive_chats: "المحادثات المؤرشفة",
          my_bookings: "حجوزاتي",
          prescription: "الوصفات الطبية",
          reports: "التقارير",
        },
        review: {
          how_would_you_like_to_rate: "كيف تقييم الجلسة",
          your_opinion_matters_to_us: "رأيك يهمنا!",
          share_your_feedback: "تعليقك",
          tell_us_about_your_experience: "أخبرنا عن تجربتك",
        },
        confirmBooking: {
          consultation_type: "نوع الاستشارة",
          consultant: "المستشار",
          date: "التاريخ",
          time: "الوقت",
          total_cost: "التكلفة الإجمالية",
          cost: "سعر الاستشارة",
          discount: "تخفيض",
          vat: "الضريبة",
          my_wallet: "المحفظة",
          sar: "ريال",
          amount_payable: "المبلغ المطلوب",
          vat_number: "الرقم الضريبي",
          session_rate: "سعر الجلسة",
          sub_total: "المجموع الفرعي",
          online_consultancy_rate: "سعر الاستشارة",
          total: "التكلفة الاجمالية",
          inc_vat: "شامل الضريبة",
        },
        book_an_appointment: {
          select_appoinment_date: "حدد التاريخ",
          select_appoinment_time: "حدد الوقت",
          category1: "دقيقة",
          category2: "دقيقة",
          no_sessions_exist: "عفوًا، لا يوجد مواعيد متاحة في الوقت المحدد",
          min: "دقيقة",
          select_time_slot: "اختر الوقت المناسب",
        },
        filter: {
          online: "مفعل",
          offline: "غير مفعل",
        },
        choosePayment: {
          pay_through: "الدفع عن طريق",
        },
        message_alert: {
          try_again_in: "حاول مرة أخرى في",
          sec: "ثانية",
          your_session_confirmed_please_check_inbox:
            "تم تأكيد حجزك ، يمكنك الان التواصل مع المختص من خلال جلساتي",
          on_consultant_submit: "نشكر اهتمامك، تم إرسال بياناتك",
          alert: "تنبيه",
          on_instant_session_confirm:
            "تم تاكيد جلستك الفورية. يمكنك الانتقال الى المحادثة سوف تبدأ جلستك خلال 5 دقائق ",
          reschedule_confirmation: "هل تم التنسيق مع العميل ؟ ",
          cancel_confirmation: "هل أنت متأكد من إلغاء الموعد؟",
          start_now_confirmation: "هل تم التنسيق مع العميل ؟ ",
          on_cancel_session: "تم إلغاء الموعد",
          end_session: "انتهت الجلسة",
          end_session_confirmation: "هل أنت متأكد أنك تريد إنهاء الجلسة؟",
          save_changes_confirmation: "هل انت متأكد من حفظ التغييرات؟",
          on_session_end: "انتهت الجلسة",
          payment_failed: "فشلة عملية الدفع، الرجاء التحقق من بيانات الدفع",
          cannot_reschedule: "لا يمكن اعادة جدولة الحجز",
          cannot_cancel: "لا يمكن الغاء الحجز",
          cannot_start_now: "لا يمكن بدا الجلسة في حال وجود جلسة الان",
          only_english: "الرجاء إدخال اللغة الإنجليزية فقط",
          audio_permission_text:
            "يجب أن تسمح لتطبيقك بالوصول إلى الميكروفون الخاص بك قبل أن تتمكن من قبول أو إجراء مكالمة صوتية في Estenarh",
          video_permission_text:
            "يجب أن تسمح لتطبيقك بالوصول إلى الميكروفون والكاميرا قبل أن تتمكن من قبول أو إجراء مكالمة فيديو في Estenarh",
          permission_text:
            "يجب أن تسمح لتطبيقك بالوصول إلى الميكروفون والكاميرا قبل أن تتمكن من قبول أو إجراء مكالمة خلال الجلسة",
          notification_permission_text:
            "لتجربة أفضل: نرجوا تفعيل الإشعارات للتذكير بمواعيد الجلسات",
          participant_permission_issue: "رفض المستخدم الوصول لتلقي المكالمة.",
          invalid_name: "فقط الأبجدية الإنجليزية والعربية",
          invalid_alpha_numeric: "فقط الحروف والارقام مسموحة",
          are_you_sure_to_send_pdfs: "هل أنت متأكد من إرسال المرفق / الملفات",
          android_audio_msg_permission:
            "يجب أن تسمح لتطبيقك بالوصول إلى ميكروفون الجهاز والتخزين قبل التمكن من تسجيل الصوت في Estenarh",
          ios_audio_msg_permission:
            "يجب أن تسمح لتطبيقك بالوصول إلى ميكروفون الجهاز قبل التمكن من تسجيل الصوت في Estenarh",
          ios_photos_permission:
            "يجب السماح لتطبيق استنارة بالدخول على الصور لكي تتمكن من ارسال صوره",
          alternate_call: "مكالمة بديلة",
          rate_our_app: "قيّم التطبيق",
          chat_has_been_closed: "تم إغلاق هذه المحادثة",
          settings_disabled:
            "لا يمكنك الوصول إلى الإعدادات أثناء إجراء المكالمة",
          logout_disabled: "لا يمكن تسجيل الخروج وقت الاتصال",
          first_ten_images: "تم تحديد أول 10 صور فقط",
          instant_booking_on:
            "تفعيل الجلسات الفورية يعني قبولك وموافقتك على بدأ الجلسة خلال ٥ دقائق من الحجز.",
          instant_booking_off: "تم تعطيل استقبال الجلسات الفورية",
          instant_booking_time_expired:
            "تجاوزت الوقت المسموح لانهاء الدفع. حاول مرة اخرى",
          vacation_status_on: "تم تشغيل حالة الإجازة",
          vacation_status_off: "تم إيقاف حالة الإجازة",
          consultant_no_available_for_instant_booking:
            "تم حجز هذا المستشار من قبل عميل اخر. فضلا العودة للحجز مع مستشار اخر",
          unable_to_archive: "لا يمكن ارشفة الجلسة الابعد انتهاء فترة المحادثة",
          cannot_reschedule_to_previous_date:
            "لا يمكن اعادة الجدولة لتاريخ سابق",
          support_down: "الدعم متراجع",
          support_down_modal_text:
            "نأسف للإزعاج ، دعم العملاء معطل في الوقت الحالي. إذا كان هناك استفسار عاجل ، يرجى التواصل معنا عبر الواتس اب بالضغط أدناه.",
          please_wait: "الرجاء الانتظار، يتم رفع الملفات حاليا",
          server_not_reachable: "يوجد تحديث على السيرفر. الرجاء المحاولة مجددا",
          cannot_initiate_support_chat: "لا يمكن بدا محادثة مع خدمة العملاء",
          medicine_required: " الرجاء إضافة بعض الأدوية",
          copied: "نسخ",
          are_you_sure_to_delete_account:
            "تم استلام طلبك. سوف يتم حذف الحساب خلال ٣٠ يوم. في حال تسجيل الدخول خلال الفترة المحدده سوف يتم اعادة تنشيط الحساب",
          account_deleted: "تم حذف الحساب",
          prescription_download:
            "[A] Your prescription has been downloaded successfully",
          prescription_created_successfully: "تم انشاء الوصفة الطبية",
          prescription_failed: "حدث خطأ ما. أعد المحاولة من فضلك",
          prescription_deleted: "تم الغاء الوصفة",
          email_or_phone_not_registered:
            "رقم الجوال او البريد الالكتروني غير مسجل",
          note_updated: "تم تحديث الملاحظة",
          new_note_successful: "تم إضافة ملاحظة جديدة بنجاح",
          diagnosis_saved: " تم حفظ التشخيص",
          note_delete: "ملاحظة حذف بنجاح",
          diagnosis_updated: "تم تحديث التشخيص",
          report_saved: "تم حفظ التقرير",
          report_updated: "تم تعديل التقرير",
          reschedule_disabled: "لا تستطيع اعادة الجدولة خلال الجلسة",
          start_now_disabled: "الجلسة قيد التنفيذ",
          cancel_disabled: "لا يمكن الالغاء خلال الجلسة",
          make_changes_in: "قم بإجراء بعض التغيير في ",
        },
        header_titles: {
          filter: "فلتر",
          my_profile: "معلومات المستشار",
          join_as_consultant: "انضم معنا كمستشار",
          settings: "الإعدادات",
          invoices: "الفواتير",
          my_invoices: "فواتيري",
          monthly_invoices: "تفاصيل الفاتورة",
          consultant_profile: "معلومات المستشار",
          book_an_appointment: "المواعيد",
          inbox: "حجوزاتي",
          confirm_booking: "تأكيد الحجز",
          choose_payment: "اختر طريقة الدفع",
          login_and_register: "تسجيل / تسجيل الدخول",
          very_mobile_number: "رمز التحقق",
          enter_your_information: "إدخال المعلومات الخاصة بك",
          reset_password: "إعادة تعيين كلمة المرور",
          create_new_password: "إنشاء كلمة مرور جديدة",
          calendar: "التقويم",
          notifications: "الاشعارات",
          general_information: "معلومات عامة",
          session_reshedule: "إعادة جدولة",
          auto_message: "الرسائل الافتراضية",
          my_shedule: "مواعيدي",
          change_password: "تغيير كلمة السر",
          menu: "القائمة",
          terms_and_conditions: "الشروط والأحكام",
          privacy_policy: "سياسة الخصوصية",
          about_us: "عنا",
          close_session: "تعديل مواعيدي اليومية",
          client_reviews: "تعليقات العملاء",
          tutorial: "مزايا استنارة",
          live_chat: "دردشة مباشرة",
          Contract_form: "العقد",
          invoice_detail: "تفاصيل الفاتورة",
          instant_booking_filter: "تصفية",
          search_filter: "تصفية البحث",
          instant_booking: "الحجز الفوري",
          archive_chats: "المحادثات المؤرشفة",
          support_chats: "الدعم الفني",
          consultant_reviews: "التعليقات",
          my_bookings: "حجوزاتي",
          prescription: "الوصفات الطبية",
          client_file: "رقم الملف",
          add_prescription: "إضافة وصفة",
          diagnosis: "التشخيص",
          reports: "التقارير",
          my_notes: "ملاحظاتي",
          note: "ملاحظة",
          prescription_preview: "معاينة الوصفة الطبية",
          add_diagnosis: "أضف التشخيص",
          edit_diagnosis: "تحرير التشخيص",
          add_reports: "إنشاء التقرير",
          edit_reports: "تعديل التقرير",
          report_preview: "مشاهدة التقرير",
        },
        successText: {
          login_successful: "تم تسجيل الدخول بنجاح!",
          signup_successful: "تم فتح حساب بنجاح!",
          archive_successful: "تم وضع الدردشة في الأرشيف!",
          un_archive_successful: "تم إلغاء أرشفة الدردشة!",
          code_sent: "تم ارسال الرمز بنجاح!",
          update_successful: "تم التحديث بنجاح!",
          schedule_update_successful: "تم تحديث الجدول بنجاح!",
          change_password: "تم تحديث كلمة السر بنجاح!",
          close_session_success: "تم تعديل جدولك اليومي",
          updated_successfully: "تم التحديث بنجاح",
          messages_updated: "تم تحديث الرسائل",
          picture_uploaded: "تم تحميل الصورة",
          rating_success: "شكرا لتقييمك ونتمنى لك يوم سعيد",
        },
        notifications: {
          mark_all_as_read: "تم قراءة جميع الاشعارات",
          booked_a_session: "حجز جلسة معك في",
          resheduled: "قام بإعادة جدولة الجلسة معك. الوقت الجديد",
          at: "في",
          unread: "غير مقروءة",
        },
        auto_message: {
          opening_message: "الرسالة الافتتاحية الافتراضية",
          closing_message: "الرسالة الختامية الافتراضية",
          edit: "تعديل",
          cancel: "إلغاء",
          type_your_message: "اكتب رسالتك",
        },
        my_schedule: {
          early_morning: "الصباح الباكر",
          morning: "صباحا",
          afternoon: "بعد الظهر",
          evening: "مساء",
        },
        weekdays: {
          sunday: "أحد",
          monday: "اثنين",
          tuesday: "ثلاثاء",
          wednesday: "اربعاء",
          thursday: "خميس",
          friday: "جمعة",
          saturday: "سبت",
        },
        privacy_policy: {
          last_updated: "آخر تحديث: ١/١٠/٢٠٢٠",
          first_term: {
            heading: "المقدمة",
            text_1:
              "معنى (سياسة الخصوصية) في تطبيق استنارة هي: الطرق الخاصة بجمع البيانات التقنية اللازمة لحماية المعلومات الشخصية لمستخدمي التطبيق",
            text_2:
              "يقصد (بالمستخدم) حيثما ورد في سياسة الخصوصية: هو كل من قام بإنشاء حساب له على التطبيق وذلك على التقسيم الآتي: العميل بقصد الاستفادة من الخدمات الاستشارية المتاحة فيه. المستشار بقصد تقديم الخدمات الاستشارية للعملاء من خلاله",
            text_3:
              "بتحميلك للتطبيق وإنشاء صفحة المستخدم الخاصة فيك فيه فإنك توافق على سياسة الخصوصية مباشرة وتعد سياسة الخصوصية اتفاقية ملزمة للطرفين من غير مدة محددة",
            text_4:
              "عند اقتضاء الحاجة سوف يتم تعديل سياسة الخصوصية إما كاملة أو جزأ منها أو حذف أو إضافة ما يستدعي ذلك من غير أخذ موافقتك كما سوف يتم نشر التعديل على التطبيق ويكون التعديل سارٍ المفعول من تاريخ نشره في التطبيق وبعد النشر يعتبر بقاؤك في التطبيق التزاما منك ودليل رضا وقبول بسياسة الخصوصية الواردة في النسخة المعدلة",
            text_5:
              "يمنع التطبيق على نفسه حفظ الجلسات الاستشارية لديه كون العلاقة بين العميل والمستشار خاصة بهما- مشفرة- لا يستطع التطبيق الاطلاع عليها",
            text_6:
              "يحتفظ التطبيق بمعلومات صفحة المستخدم المسجلة فيه فقط ليتم استخدامها من قبل إدارة التطبيق أو خدمة العملاء فيه أو عند الحاجة لها وفقاً لقوانين وتشريعات المملكة العربية السعودية",
          },
          second_term: {
            heading: "معلومات المستخدم",
            text_1:
              "لا يقوم التطبيق بحفظ أي بيانات خاصة بالدفع الالكتروني عند حجز الخدمة الاستشارية حيث تتم معالجة المدفوعات من خلال بوابات دفع الكتروني مستقلة عن التطبيق ومعتمدة في المملكة العربية السعودية",
            text_2:
              "(عزيزي المستخدم عند قيامك بالتسجيل في التطبيق لأجل الاستفادة من خدماته سوف نطلب منك تزويدنا (الاسم-رقم الجوال- البريد الإلكتروني-تاريخ الميلاد-الجنس-الدولة-المدينة",
            text_3:
              "عند قيامك بطلب التسجيل في التطبيق سوف تصلك رسائل لتفعيل صفحة المستخدم الخاصة بك وذلك لمراقبة الاحتيال وللتأكد من صحة التسجيل وسلامته من المخاطر التقنية",
            text_4:
              "يقر العميل بمنح التطبيق صلاحية الدخول إلى الكاميرا ومكتبة الصور الخاصة به لرفع الوثائق المطلوبة التي قد يحتاج إليها المستشار أثناء تقديمه للاستشارة كما يؤكد التطبيق على تشفيره لهذه الوثائق المرفوعة وأنه لا يحق له الاطلاع عليها أو حفظها كون العلاقة بين العميل والمستشار سرية خاصة بهما",
            text_5:
              "تمنح إدارة التطبيق وصول خدمة العملاء لديه لمعلومات المستخدمين لأجل خدمتهم ولقياس الأداء ولضمان جودة الخدمات المقدمة",
            text_6:
              "يقوم التطبيق بالتعرف على الجهاز عند تثبيته ويتضمن ذلك معلومات مثل نوع الجهاز ومعلومات نظام التشغيل ومعلومات المتصفح وعنوان بروتوكول الانترنت ومعلومات شبكة الجوال بما في ذلك رقم الهاتف ومعرفات الجهاز",
            text_7:
              "يلتزم التطبيق بعدم التعديل على بيانات المستخدمين إلا في حال طلب المستخدم ذلك لوجود مشكلة تقنية في حسابه كما يلتزم التطبيق أن يقدم البيانات المسجلة فيه كما هي بدون تغيير",
          },
          third_term: {
            heading: "المعلومات الخاصة بملفات الارتباط",
            text_1:
              "سوف يتم ارسال ملفات تعريف الارتباط إلى الجهاز الخاص بك من التطبيق وسوف يتم تخزينه على جهازك ويقوم التطبيق بتخصيص ملف تعريف ارتباط مختلف لكل جهاز يتصل به ",
            text_2:
              "يقوم التطبيق باستخدام ملفات تعريف الارتباط للتعرف على جهازك ونظام التشغيل الخاص به وتزويدك بخدماته التقنية اللازمة",
            text_3:
              "عند تقدير التطبيق الخاص به عند الحاجة سوف يقوم بتحليل واستخدام البيانات والمعلومات المسجلة فيه لتحسين خدماته وتطويرها أو إضافة أو حذف خدمات أو ميزات أخرى أو نشر إعلانات من غير طلب الموافقة من المستخدم",
          },
          fourth_term: {
            heading: "مشاركة البيانات المسجلة مع طرف آخر",
            text_1:
              "سوف يقوم التطبيق عند الحاجة بمشاركة بيانات المستخدم المسجلة فيه مع طرف آخر وذلك للمساعدة في تحسين الخدمات المقدمة لمستخدميه واصلاح المشاكل عند حدوثها",
            text_2:
              "قد يطلب من التطبيق في بعض الأحوال من قبل الجهات القضائية أو التحقيق ونحوه مشاركة المعلومات المسجلة في التطبيق معهم وهي (الاسم-رقم الجوال- البريد الإلكتروني-تاريخ الميلاد-الجنس-الدولة-المدينة) وذلك إنفاذا للقوانين والتشريعات المقررة في المملكة العربية السعودية",
            text_3:
              "عند الحاجة سوف يقوم التطبيق بمشاركة البيانات المسجلة فيه مع طرف آخر للبحث أو للتحقيق أو للقضاء لاتخاذ إجراءات بشأن الأعمال الغير قانونية أو الاحتيالية المشتبه فيها أو الحالات التي تنطوي على تهديدات أو انتهاكات بنود اتفاقية شروط استخدام التطبيق أو سياسة الخصوصية أو عند محاولة إلحاق الضرر بالتطبيق أو غير ذلك من تجاوزات حسب ما تقتضيه القوانين والتشريعات.",
            text_4:
              "سوف يقوم التطبيق مباشرة بمشاركة أو تسليم البيانات المسجلة فيه مع الجهات التي قد تتملك التطبيق مستقبلًا سواء بالاندماج أو الاستحواذ الكلي أو الجزئي وعند حدوث ذلك سوف تصلكم رسائل بذلك عن طريق الجوال أو البريد الإلكتروني المسجل في التطبيق",
          },
          fifth_term: {
            heading: "أحكام عامة",
            text_1:
              "يحق للمستخدم الاحتفاظ بجميع البيانات الخاصة فيه المسجلة في التطبيق أو تعديلها بصلاحيات محدودة من إعدادات الحساب الخاص به متى ما رغب في ذلك كما أنه يحق للعميل والمستشار تبادل الرسائل النصية بينهما ويمكنهما الدخول عليها في أي وقت",
            text_2:
              "يحتفظ التطبيق بالبيانات المسجلة فيه بشكل آمن وذلك باتباعه لمعايير عالية في إدارة أمن المعلومات للحفاظ على سريتها وجودتها من الهجمات الإلكترونية ونحوه",
            text_3:
              "عند انتهاء العلاقة التعاقدية مع التطبيق سوف يواصل حفظ(أرشفة) البيانات التالية لديه (الاسم-رقم الجوال- البريد الإلكتروني-تاريخ الميلاد-الجنس-الدولة-المدينة) وغيرها عند التعديل إن حدث ليتمكن من العودة لها عند معاودة التسجيل من جديد أو لأغراض تجارية أو تقنية أو عند طلبها من الجهات الرسمية ونحو ذلك",
            text_4:
              "يؤكد التطبيق لمستخدميه الأعزاء أنه لا يوجد طريقة إرسال آمنه عبر الانترنت 100% لذلك لا يمكنه ضمان الأمان المطلق للبيانات فيه كما هو معروف تقنياً",
          },
        },
        about_us: {
          context: "بوابتك للتوازن النفسي، والاستقرار الإجتماعي",
        },
        terms_and_conditons: {
          accept: "قبول",
          decline: "رفض",
        },
        no_found: {
          no_bookings_available: "لا توجد حجوزات متاحة",
          no_notes_found: "لم يتم العثور على ملاحظات",
        },
        chats: {
          empty_chats: "لا توجد محادثات متاحة",
          empty_chats_clients:
            "اكمل حجزك وتواصل مع مستشارك هنا عن طريق المحادثات النصية او الاتصال (الصوتي - الفديو)",
          today: "اليوم",
          yesterday: "في الامس",
          new: "رسالة جديدة",
          calling: "اتصال...",
          incoming_call: "مكالمة واردة",
          connecting: "اتصال...",
          ending: "إنهاء المكالمة",
          typing: "كتابة ...",
          you_are_typing: "أنت تكتب ...",
          participant_call_low_connectivity: "اتصال الشبكة منخفض",
          accept_call: "قبول المكالمة",
          end_call: "إنهاء المكالمة",
          speaker: "مكبر الصوت",
          mute: "كتم الصوت",
          video: "فيديو",
          remaining: "متبقي",
          exceeded: "تجاوزت",
        },
        terms_and_condition: {
          general_introduction: {
            heading: "مقدمة عامة",
            text_1:
              "تطبيق استنارة تطبيق تم إنشاؤه عن طريق مؤسسة استنارة بموجب السجل التجاري رقم 1010637817 لغرض الوساطة الإلكترونية بين العملاء والمستشارون في تقديم الاستشارات النفسية والاجتماعية والتربوية ونمط الحياة",
            text_2:
              "عزيزي المستخدم لتطبيق استنارة بتحميلك للتطبيق وتسجيلك فيه فإنك توافق على هذه الاتفاقية الغير محددة بمدة معينة كما أنه لا يمكنك فيها تغيير مادة أو إضافة شرط أو حذفه كما نود التنويه بأنه يحق للتطبيق تعديل هذه الاتفاقية متى ما استدعت الحاجة إلى ذلك من غير أخذ موافقتك كما سوف يتم نشر التعديل على التطبيق ويكون العقد المعدل سارٍ المفعول من تاريخ نشره في التطبيق وبعد النشر يعتبر بقاؤك في التطبيق التزاما منك ودليل رضا وقبول بالشروط والأحكام الواردة في النسخة المعدلة",
          },
          first_term: {
            heading: "المادة الأولى",
            text_para:
              "اسم المستخدم يشمل كل من: :تعريفات هامة للمصطلحات المذكورة في هذه الشروط متى ما جاءت في هذه الاتفاقية –اتفاقية شروط الاستخدام - ما يلي",
            text_heading: "اسم المستخدم يشمل كل من",
            text_1:
              "العميل: هو أي شخص حمل تطبيق استنارة وقام بالتسجيل فيه بغرض الاستفادة من خدمات التطبيق الذي يوفر عددًا من مقدمي الخدمات الاستشارية",
            text_2:
              "المستشار: هو الشخص المؤهل بتقديم خدمات استشارية في المجال الخاص به وفقًا لتخصصه المسجل في تطبيق استنارة",
            text_3:
              "(التطبيق: يقصد به حيثما ورد في هذه الاتفاقية (تطبيق استنارة",
            text_4:
              "صفحة المستخدم: هي الصفحة الخاصة بالعميل المنشأة من أجل أن يتمكن من الحصول على الاستشارات من خلال التطبيق أو المستشار الذي يقدم الخدمة الاستشارية للعميل",
            text_5:
              "الخدمة: هي جميع الخدمات الاستشارية الموجودة داخل التطبيق النفسية والاجتماعية والتربوية ونمط الحياة",
          },
          second_term: {
            heading: "شروط استخدام التطبيق",
            text_1:
              "يجب أن يكون المستخدم مكتسبَا للأهلية الشرعية وأن يكون عمره ثمانية عشر عام فأكثر",
            text_2:
              "يجب على المستخدم أن يقوم بتسجيل البيانات الصحيحة المطلوبة منه أثناء التسجيل للاستفادة من خدمات التطبيق بشكل أمثل وفي حال تسجيل المستخدم لبيانات غير صحيحة فالتطبيق لا يتحمل أي آثار ناتجه عن ذلك",
            text_3:
              "يجب على المستخدم أثناء تسجيله أو دخوله للتطبيق مرة أخرى بعد التسجيل أن يدخل بالخطوات الموجودة في التطبيق وأي محاولة دخول للتطبيق بغير ذلك يعتبر دخولاَ مخالفَا ويتحمل المستخدم ما يترتب على ذلك من آثار قانونية",
            text_4:
              "يمنع على المستخدم نشر أو تحميل أي مواد مخالفة لقوانين وتشريعات المملكة العربية السعودية كالمواد التشهيرية والهجومية والتهديدية والعنصرية والغير ملائمة أخلاقيًا أو ملفات تحوي فيروسات وغير ذلك من محتوى أيًا كان ضرره",
            text_5:
              " يجب على المستخدم استخدام التطبيق بالشكل الأمثل ويمنع عليه القيام بأي عمل قد يؤدي إلى الحاق ضرر بالتطبيق",
            text_6:
              "يجب على المستخدم أن يستخدم حسابه الخاص فيه بنفسه فقط ويمنع عليه انتحال شخصية أخرى أو مشاركة صفحة المستخدم مع شخص آخر ويتحمل المستخدم ما يترتب على ذلك من آثار قانونية في حال المخالفة كونه مسؤولًا على المحافظة على سرية معلوماته",
            text_7:
              "يحظر على المستخدم القيام بأي عمل يتضارب مع حقوق الملكية الفكرية للتطبيق",
            text_8:
              "إذا تبين للتطبيق وفقًا لتقديره قيام المستخدم بمخالفة هذه الشروط فله حق حذف صفحة المستخدم من التطبيق دون اشعاره بذلك وتقييد دخوله للتطبيق في حال معاودة التسجيل من جديد كما يحق للتطبيق رفض تقديم الخدمة أو منع المستخدم من استخدام التطبيق دون إبداء أسباب موجبة لذلك",
          },
          third_term: {
            heading: "أحكام الاستفادة من التطبيق",
            text_1:
              "ينحصر دور التطبيق في عرض الخدمات الاستشارية بالتوسط بين العميل والمستشار فقط ولا يعتبر التطبيق مسؤولاَ عن جودة الخدمة الاستشارية المقدمة من المستشار",
            text_2:
              "يحق للعميل اختيار نوع الخدمة التي يرغبها من التطبيق كما يحق له الاطلاع على صفحات المستشارين الخاصة بهم في التطبيق والتي تحوي المعلومات الخاصة بالمستشارين والمواعيد والأسعار المناسبة لهم",
            text_3:
              "يجب أن يكون الاتفاق بين العميل والمستشار حول تحديد السعر وموعد الخدمة كما هو موضح في التطبيق ويحظر عليهما مخالفة ذلك",
            text_4:
              "يجب على المستشار في التطبيق وضع المواعيد المناسبة له ووضع الأسعار الخاصة بالاستشارة كما يحق له تعديلها متى ما أراد ذلك حتى يطلع عليها العميل قبل الحجز وفي حال وجود أي تعديل على المواعيد أو الأسعار فإن ذلك التعديل لا يؤثر على المواعيد المحجوزة مسبقاً",
            text_5:
              "يدفع العميل قيمة الخدمة المستحقة عن طريق وسائل الدفع المتاحة في التطبيق فقط",
            text_6:
              "في حال عدم التزام المستشار بتقديم الخدمة للعميل فإنه سوف يتم خصم المبلغ منه وإعادة مبلغ الاستشارة إلى المحفظة الخاصة بالعميل داخل التطبيق",
            text_7:
              "يلتزم المستخدم طالب الاستفادة من التطبيق بكافة أحكام وشروط هذه الاتفاقية وغيرها من اتفاقيات وأخلاقيات الاستخدام الالكتروني في المملكة العربية السعودية وفي حال قيام المستخدم بتصرف يخالف ما ورد في هذه الاتفاقية فالتطبيق له حق حذف صفحة المستخدم من التطبيق دون اشعاره بذلك وتقييد دخوله للتطبيق في حال معاودة التسجيل من جديد",
          },
          fourth_term: {
            heading: "خدمات الدفع",
            text_1:
              "يجب على العميل بعد طلب الخدمة الاستشارية أن يقوم بالسداد المستحق من خلال وسائل الدفع المتاحة في التطبيق فقط ولن يتم تأكيد الموعد المحدد لطلب الخدمة إلا بعد تأكيد إتمام عملية الدفع",
            text_2:
              "يحظر على المستخدم الاحتيال في استخدام وسيلة دفع غير صحيحة أو غير صالحة كأن تكون مسروقة أو غير نقدية ويتحمل المستخدم المسؤولية المترتبة على ذلك",
            text_3:
              "جميع عمليات الدفع تتم بالريال السعودي وفي حال قام المستخدم بالدفع باستخدام عملة أخرى فيتحمل الأجور الناتجة عن تحويل العملة",
          },
          fifth_term: {
            heading: " المسؤولية",
            text_1:
              "يقتصر عمل التطبيق على القيام بخدمة الوساطة وتيسير الوصول للخدمة الاستشارية المطلوبة داخل التطبيق فقط",
            text_2:
              "عند تعرض العميل لأي أضرار تنتج عن تقصير أو اهمال المستشار في تنفيذ الخدمة فإن المستشار وحده يتحمل المسؤولية الكاملة ولا يتحمل التطبيق أي التزامات أو مسؤوليات تجاه العميل كون العلاقة بين الطرفين مستقلة سرية لا يطلع التطبيق عليها",
            text_3:
              "عند تعرض المستشار لأي ضرر كان من قبل العميل كالسب أو القذف أو التشهير أو الاختراق وغير ذلك من أضرار فإن التطبيق لا يتحمل أي التزامات أو مسؤوليات تجاه المستشار كون العلاقة بين الطرفين مستقلة سرية لا يطلع التطبيق عليها",
            text_4:
              "يتحمل المستخدم للتطبيق المسؤولية القانونية بمفرده عند ارتكابه أي مخالفة لأحكام هذه الاتفاقية او ارتكابه لنشاط غير شرعي أو قانوني يخالف القوانين والتشريعات في المملكة العربية السعودية",
            text_5:
              "يحق للمستشار الطلب من العميل بتزويده بالبيانات أو المستندات اللازمة للخدمة من أجل تقديم الخدمة المناسبة له ولكن يقع على العميل وحده مسؤولية تزويد المستشار بهذه البيانات او المستندات ولا يتحمل التطبيق أي استخدام خاطئ لهذه البيانات أو المستندات كما يجب أن يلتزم المستشار بالمحافظة على البيانات او المستندات بسرية وعدم الإفصاح عنها",
            text_6:
              "يؤكد التطبيق على سرية العلاقة بين العميل والمستشار وتشفير الخدمة الاستشارية التي تجمعهما بحيث أنه لا يمكن للتطبيق الحفظ او الاطلاع على المحادثات أو مكالمات الصوت والفيديو ولا البيانات والمستندات بين الطرفين",
            text_7:
              "سيحافظ التطبيق قدر الإمكان على التطبيق ومحتوياته الالكترونية بشكلٍ خالٍ من الأخطاء والعيوب التقنية والفيروسات والبرامج الضارة وغير ذلك من أخطار وفي حال حدوث خلل تقني أو هجوم الكتروني أو انتحال لصفحة المستخدم سواءً كان ذلك للعميل أو المستشار فإن التطبيق لا يتحمل أي آثار ناتجه عن ذلك",
            text_8:
              "يحق للتطبيق في أي وقت تغيير أو إيقاف الخدمات الموجودة داخل التطبيق دون الاخلال بالمواعيد المحجوزة مسبقاً أو إضافة خدمات جديدة للتطبيق",
            text_9:
              "يحق للتطبيق في أي وقت إيقاف التطبيق عن العمل نهائيًا أو بيعه دون الإخلال بالمواعيد المحجوزة مسبقاً",
          },
          sixth_term: {
            heading: "الاشعارات",
            text: "تعد رسائل التطبيق سواءً عن طريق رقم الجوال المسجل في بيانات اسم المستخدم أو البريد الالكتروني أو الاشعارات التي تتم عبر التطبيق رسائل رسمية منتجه لآثارها القانونية",
          },
          seventh_term: {
            heading: "التقاضي وحل النزاعات",
            text: "يؤكد تطبيق استنارة أنه يسعى بالوساطة بين العميل والمستشار في تقديم خدمات استشارية نوعية متخصصة تسهم في اصلاح حياة الآخرين لكن في حال حدوث أي مخالفة لشروط استخدام التطبيق أو إلحاق الضرر به أو مخالفة للقوانين واللوائح المعمول بها في المملكة العربية السعودية أو غير ذلك من النزاعات فإن التطبيق مخير إما بحل الخلاف عن طريق المفاوضات و التسوية الودية أو الاتجاه مباشرة للجهات الرسمية المختصة في مدينة الرياض و إذا كان النزاع يستدعي تدخل الجهات الرسمية ذات العلاقة فإن قوانين المملكة العربية السعودية تطبق على أحكام هذه الاتفاقية وتختص الجهة المختصة بمدينة الرياض فقط بنظر أي نزاع ينشأ عن ذلك بين الطرفين سواءً كان التطبيق فيه مدعيًا أو مدعى عليه بناءً على المادة الخامسة والأربعون من نظام المرافعات الشرعية وبقبول هذه الاتفاقية فإن المستخدم يسقط حقه المكاني عند التقاضي إذا كان خارج مدينة الرياض",
          },
          eigth_term: {
            heading: "المادة الثامنة",
            text: "النسخة المكتوبة باللغة العربية من شروط استخدام التطبيق وسياسة الخصوصية هي المعتمدة في حال وجود نزاع أو غموض أما اللغة الإنجليزية فهي مجرد ترجمة فقط",
          },
        },
        counting: {
          one: "1",
          two: "2",
          three: "3",
          four: "4",
          five: "5",
          six: "6",
          seven: "7",
          eight: "8",
          nine: "9",
          ten: "10",
        },
        tutorial: {
          heading1: "وزارة الصحة",
          heading2: "استنارة",
          heading3: "خصوصية",
          heading4: "جودة",
          heading5: "توازن",
          heading6: "مرونة",
          heading_client1: "نيد للاستشارات ؟",
          heading_client2: "ابحث عن مستشار في دليلنا",
          heading_client3: "حجز الجلسات من الفتحات المتاحة",
          heading_client4: "ابدأ الدردشة / الاتصال مع الاستشاري",
          heading_client5: "احصل على حل للمشكلة",
          text_client1:
            "هذه دمية لا يقصد بها أن تقرأ ، ولكن لتوضيح كيف تشعر ومظهر!",
          text_client2:
            "هذه دمية لا يقصد بها أن تقرأ ، ولكن لتوضيح كيف تشعر ومظهر!",
          text_client3:
            "هذه دمية لا يقصد بها أن تقرأ ، ولكن لتوضيح كيف تشعر ومظهر!",
          text_client4:
            "هذه دمية لا يقصد بها أن تقرأ ، ولكن لتوضيح كيف تشعر ومظهر!",
          text_client5:
            "هذه دمية لا يقصد بها أن تقرأ ، ولكن لتوضيح كيف تشعر ومظهر!",
          text_client6:
            "هذه دمية لا يقصد بها أن تقرأ ، ولكن لتوضيح كيف تشعر ومظهر!",
          text_1: "مصرح من وزارة الصحة",
          text_2: "تصفح المستشارين واختر المناسب لمساعدتك",
          text_3:
            "حدد مدة الجلسة  30 او 60 دقيقة \n واختر الموعد المناسب لك مع المستشار",
          text_4: "أكمل عملية الدفع",
          text_5: "ابدأ التواصل مع مستشارك للاستعداد للجلسة",
          text_6: "ابدأ جلستك في موعدها \n اتصال صوتي او فديو او محادثة",
          skip: "تخطي",
        },
        question_mark: "؟",
        version: {
          title: "يرجى التحديث",
          msg: "سيتعين عليك تحديث تطبيقك إلى أحدث إصدار للاستمرار في استخدامه.",
        },
        session_rate: {
          session_rate_thirty: "30 دقيقة /",
          session_rate_sixty: "60 دقيقة /",
        },
        bottom_navigator: {
          home: "الرئيسية",
          sessions: "الجلسات",
          menu: "القائمة",
          calendar: "التقويم",
        },
        intant_booking_info: {
          text_1: "يمكن للعميل رؤيتك في قائمة الجلسة الفورية",
          text_2: "سعر الجلسة يزيد بنسبة",
          text_3: "تبدأ الجلسة مباشرة بعد بدء المحادثة",
          text_4: "يمكنك بدء الجلسة في غضون 5 دقائق كحد أقصى",
          text_5: "لا يمكن جدولة الجلسة الفورية  أو إلغاؤه",
          text_6: "عليك إيقاف الجلسة الفورية إذا كنت مشغولاً",
          text_7: "الجلسات الفورية لا تتعارض مع حجوزاتك المجدولة",
        },
        prescription: {
          no_prescription_found: "لم يتم العثور على وصفة طبية",
        },
        diagnosis: {
          no_diagnosis_found: "لم يتم العثور على تشخيص",
        },
        report: {
          no_report_found: "لم يتم العثور على تقارير",
        },
      })
    );
    // encodedParams.append("target", "ur");
    // encodedParams.append("source", "en");
    encodedParams.append("key", "AIzaSyBWqK7aXkr24LUGA7K6Xqagv3QWVmSd-jU");

    const options = {
      method: "POST",
      url: "https://translation.googleapis.com/language/translate/v2/detect",
      data: encodedParams,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        // setForm({
        //   ...form,
        //   translatedText: response.data.data.translations[0].translatedText,
        // });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="App">
      <h1>Dummy Users</h1>
      <div data-testid="users-list">
        {loading
          ? "Loading..."
          : users?.map((user) => (
              <p key={user.id} data-testid="user-data">
                {user.name}
              </p>
            ))}
      </div>
      {/* <input
        onChange={(e) => setForm({ ...form, inputText: e.target.value })}
      /> */}
      {/* <button onClick={() => translateText()}>Translate to arabic</button> */}
      {(!users?.length || !loading) && (
        <button data-testid="fetch-user-btn" onClick={() => fetchUsers()}>
          Fetch Users
        </button>
      )}
      <div>{form.translatedText}</div>
    </div>
  );
}

export default App;
