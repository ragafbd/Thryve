# Thryve Coworking Website - Implementation Contracts

## Current Status
Frontend is complete with mock data. Backend integration needed.

## Frontend Implementation (COMPLETED)
✅ Hero Section with background image
✅ About Section with 3 workspace images
✅ Amenities Section (11 amenities)
✅ Pricing Section with GST Extra note
✅ Contact Form with validation
✅ Responsive design for mobile/tablet/desktop
✅ Navigation with smooth scrolling

## Mock Data Currently Used (frontend/src/mock.js)
- Hero background image URL
- About section image URLs (3 images)
- Amenities list (11 items)
- Pricing plans (3 tiers with GST note)
- Contact information

## Backend Integration Needed

### API Endpoints to Create

#### 1. Contact Form Submission
**Endpoint**: `POST /api/contact`
**Purpose**: Save contact form submissions to database
**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```
**Response**:
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "id": "submission_id"
}
```

### Database Schema

#### ContactSubmission Collection
```python
{
  "id": "string (UUID)",
  "name": "string",
  "email": "string", 
  "phone": "string",
  "message": "string",
  "created_at": "datetime",
  "status": "string (new/contacted/resolved)"
}
```

## Frontend Changes for Backend Integration

### Files to Update:
1. **frontend/src/pages/HomePage.jsx**
   - Update `handleSubmit` function
   - Replace mock toast with actual API call
   - Add error handling
   - Show success/error messages

### Integration Steps:
1. Remove mock toast response
2. Add axios POST request to `/api/contact`
3. Handle success response (clear form, show toast)
4. Handle error response (show error message, keep form data)
5. Add loading state during submission

## Testing Checklist
- [ ] Contact form submits successfully
- [ ] Data saves to MongoDB
- [ ] Success message displays
- [ ] Form clears after successful submission
- [ ] Error handling works
- [ ] Phone numbers display correctly
- [ ] GST Extra shows on all pricing plans
- [ ] Images load properly on all sections
- [ ] Responsive design works on mobile

## Deployment Readiness
- [ ] Backend API tested
- [ ] Frontend connected to backend
- [ ] All images loading
- [ ] Contact form working end-to-end
- [ ] Mobile responsive verified
- [ ] Performance optimized
