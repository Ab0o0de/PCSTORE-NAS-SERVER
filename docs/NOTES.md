# PCSTORE Server - Engineering Notes

هذا الملف مخصص لحفظ جميع الملاحظات والقرارات الهندسية المؤجلة حتى لا تضيع داخل المحادثات.

---

# [NOTE-001]

Title:
API Client Future Improvements

Status:
Pending

Priority:
Medium

Module:
Authentication

Files:
- src/api/client/axios.ts
- src/api/client/interceptors.ts

Description:

ملف axios.ts يؤدي وظيفته الحالية بشكل صحيح.
لن يتم تعديله الآن.

سيتم تطويره عند تنفيذ نظام Authentication.

---

Future Tasks

- JWT Authentication
- Refresh Token
- Request Interceptors
- Response Interceptors
- Global Error Handler
- Retry Policy (GET Only)
- AbortController Support
- Correlation ID
- Request ID
- Development Logging
- Standard API Error Model
- API Versioning
- Multi Server Support
- Tenant Header Support

---

Decision

لا يتم تعديل axios.ts الآن.

يصبح مركز الاتصال الرئيسي للنظام عند بدء Module Authentication.

---

History

Created:
2026-08-07

Last Updated:
2026-08-07
## NOTE-002 - Axios Client

Status: Approved

File:
src/api/client/axios.ts

Decision:
يبقى الملف مسؤولًا فقط عن إنشاء Axios Instance.

لا تتم إضافة:
- JWT
- Interceptors
- Retry
- Error Handling
- Logging

حتى تنفيذ Authentication Module.

Reason:
اتباع مبدأ Single Responsibility ومنع إدخال منطق غير مستخدم مبكرًا.

Future:
عند تنفيذ Authentication سيصبح نقطة الاتصال المركزية لجميع طلبات الـ API.