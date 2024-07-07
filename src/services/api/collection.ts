import { StaticImageData } from 'next/image'

export type ErrorResponseTypes = {
    response: { data: { errors: string[] } }
}

export type UserTypeProps = {
    email: string
    firstName?: string
    lastName?: string
    id: number
    role: string
    avatar?: string | StaticImageData
    isLoading?: boolean
    profession?: string
    address: string,
    balance: number,
    network: string,
    chainId: number,
}

export type ChangePasswordTypes = {
    newPassword: string
    passwordConfirm: string
    oldPassword: string
}

export type UpdateUserProfileForm = {
    firstName: string
    lastName: string
    profession: string
    avatar: string
}

export type FilterTypeProps = {
    filter: any
    sort: any
    limit: number
    page: number
    search: string
    searchType: string
}

//Blog
export type CreateBlogTypeProps = {
    title: string
    description: string
    image: string
    content: string
    categories: string[]
    tag: string
}

export type UpdateBlogTypeProps = CreateBlogTypeProps & {
    id: string
}

export type BlogListTypeProps = {
    _id: string
    title: string
    description: string

    image: string
    content: string
    slug: string
    tag: string
    isPopulate: boolean
    isTop: boolean
    isPublished: boolean
    categories: string[]
    createdAt: string
    updatedAt: string
}

export type ListBlogTypeProps = {
    statusCode: number
    data: {
        docs: BlogListTypeProps[]
        totalDocs: number
        limit: number
        totalPages: number
        page: number
        pagingCounter: number
        hasPrevPage: boolean
        hasNextPage: boolean
        prevPage: null
        nextPage: null
    }
}

//Users
export type UserItemTypeProps = {
    avatar: string
    isBlocked: boolean
    address: string
    chainId: number
    network: string
    balance: number
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    isActive: boolean
    createdAt: string
    updatedAt: string
    role: string
}

export type UserListTypeProps = {
    statusCode: number
    data: {
        docs: UserItemTypeProps[]
        totalDocs: number
        limit: number
        totalPages: number
        page: number
        pagingCounter: number
        hasPrevPage: boolean
        hasNextPage: boolean
        prevPage: null
        nextPage: number
    }
}

export type ChangePasswordUserProps = {
    userid: string
    newPassword: string
    passwordConfirm: string
}

export type InstructorItemTypeProps = {
    _id: string
    firstName: string
    lastName: string
    email: string
    profession: string
    id: string
}

export type EndPickedCourseTypes = {
    courseId: string
    studentId: string
}

type CategoriesTypeProps = {
    _id: string
    id: string
    name: string
    slug: string
}

export type LessonSlugTypes = {
    sectionName: string
    _id: string
    title: string
    slug: string
    level: string[]
    courseId: string
    classId: string
    pickedStudent: number
    limitStudent: number
    isPublic: boolean
    creatorId: string
    startTime: string
    endTime: string
    createdAt: string
    updatedAt: string
    isExpired: boolean
    id: string
    content: string
    pdfLink: any
    reviewLink: any
    details: string[]
    instructorId: string
}

export type LessonDemoTypes = {
    sectionName: string
    items: LessonSlugTypes[]
}

export type CourseItemTypeProps = {
    avatar: string
    _id: string
    title: string
    slug: string
    tag: string[]
    shortDescription: string
    description: string
    image: string
    isPublic: boolean
    isPaid: boolean
    price: number
    instructorId: InstructorItemTypeProps
    categories: CategoriesTypeProps[]
    enrolls: number
    isDeleted: boolean
    createdAt: string
    updatedAt: string
    id: string
    maxStudents: number
    type: string

    isVerified: boolean
    reason: string
    durationALesson: number
    maxNumberPickInWeek: number
    totalLesson: number

    startTime: string
    availableTimes: TimePicked[]

    demoLessons?: demoLessonTypes[]
    lessons?: LessonDemoTypes[]
}

export type ChangePasswordTypeProps = {
    newPassword: string
    passwordConfirm: string
    id: string
}

//Courses
export type CoursesListTypeProps = {
    statusCode: number
    data: CourseItemTypeProps[]
}

export type demoLessonTypes = {
    sectionName: string
    title: string
    reviewLink: string
    pdfLink: string
    details: string[]

    id?: string
}

export type CreateCourseForm = {
    title: string
    shortDescription: string
    description: string
    image: string
    categories: string[]
    price: number
    maxNumberPickInWeek: number
    totalLesson: number
    durationALesson: number
    startTime: string
    availableTimes: TimePicked[]
    demoLessons: demoLessonTypes[]
    avatar: string
    type: string
    maxStudents: number
    isPublic: boolean
}
export type TimePicked = {
    date: any
    hour: number
    minute: number
    isPicked?: boolean
    timeZone?: number
}

export type UpdateCourseForm = CreateCourseForm & {
    courseId: string
}

export type CategoryTypeProps = {
    _id: string
    name: string
    slug: string
    isPopulate: boolean
    isTop: boolean
    icon: string
    isPublished: boolean
    parentCategoryId: string
    createdAt: string
    updatedAt: string
}

export type CategoriesListTypeProps = {
    data: CategoriesTypeProps[]
}

export type CategoriesListForm = {
    data: CategoryTypeProps[]
}

export type CourseListEnroll = {
    _id: string
    courseId: {
        _id: string
        title: string
        slug: string
        instructorId: {
            _id: string
            firstName: string
            lastName: string
            email: string
            profession: string
            id: string
        }
        id: string
    }

    studentId: {
        _id: string
        firstName: string
        lastName: string
        email: string
        id: string
    }

    createdAt: string
    updatedAt: string
    verified: false
    id: string
}

export type StudentEnrollCourse = {
    courseId: string
    studentId: string
}

//Lessons management
export type CreateLessonFormTypeProps = {
    sectionName: string
    title?: string
    reviewLink: boolean
    pdfLink: boolean
    details: string[]
    instructorId: string
    content: string
    video: string
    level: string[]
    startTime: string
    limitStudent: number
    endTime: string
    courseId: string
    classId: string
}

export type UpdateLessonFormTypeProps = CreateLessonFormTypeProps & {
    id: string
}

export type LessonListTypeProps = {
    content: string
    courseId: {
        id: string
        slug: string
        title: string
        _id: string

        image: string
        description: string
        shortDescription: string
    }

    creatorId: {
        email: string
        firstName: string
        lastName: string
        id: string
        profession: string
    }
    createdAt: string
    freeReview: boolean
    id: string
    isExpired: boolean
    isPublic: boolean
    level: string[]

    slug: string
    startTime: string
    title: string
    updatedAt: string
    video: string
    endTime: string
    limitStudent: number

    instructorId: InstructorScheduleTypes
}

export type InstructorScheduleTypes = {
    email: string
    firstName: string
    id: string
    lastName: string
    profession: string
    _id: string
}

//Categories
export type CreateCategoryForm = {
    name: string
    parentCategoryId: string
}

export type UpdateCategoryForm = CreateCategoryForm & {
    id: string
    isPublished: boolean
}

//Feedback
export type FeedbackItem = {
    _id: string
    courseId: {
        _id: string
        title: string
        slug: string
        id: string
    }
    lessonId: {
        _id: string
        title: string
        slug: string
        id: string
    }
    teacherId: {
        _id: string
        firstName: string
        lastName: string
        email: string
        role: string
        profession: string
        id: string
    }
    studentId: null
    content: string
    shouldBlock: boolean
    isVerified: boolean
    createdAt: string
    updatedAt: string
    id: string
}

export type FeedbackListTypeProps = {
    statusCode: number
    data: {
        docs: FeedbackItem[]
        totalDocs: number
        limit: number
        totalPages: number
        page: number
        pagingCounter: number
        hasPrevPage: boolean
        hasNextPage: boolean
        prevPage: null
        nextPage: null
    }
}

// Assignment type
export type CreateAssignmentForm = {
    courseId: string
    lessonId: string
    title: string
    description: string
    attachments: string[]
}

export type UpdateAssignmentForm = CreateAssignmentForm & {
    assignmentId: string
}

export type LessonAssignmentItemTypes = {
    _id: string
    title: string
    startTime: string
    endTime: string
    id: string
}

export type InstructorAssignmentItemTypes = {
    _id: string
    firstName: string
    lastName: string
    email: string
    profession: string
    id: string
}

export type AssignmentItemType = {
    _id: string
    courseId: {
        _id: string
        title: string
        slug: string
        startTime: string
        id: string
    }
    lessonId: LessonAssignmentItemTypes
    instructorId: InstructorAssignmentItemTypes
    title: string
    description: string
    attachments: string[]
    createdAt: string
    updatedAt: string
    id: string
}

export type SelectType = {
    label: string
    value: string
}

export type FilterType = {
    text: string
    value: string
}

export type CreateAssignmentSubmitForm = {
    assignmentId: string
    note: string
    attachments: string[]
}

export type UpdateAssignmentSubmitForm = CreateAssignmentSubmitForm & {
    id: string
}

export type AssignmentSubmitItem = {
    _id: string
    assignmentId: string
    studentId: string
    attachments: string[]
    note: string
    createdAt: string
    updatedAt: string
    id: string
}

export type AssignTeacherCourse = {
    courseId: string
    teacherId: string
}

//Classrooms
export type CreateClassroomsForm = {
    name: string
    description: string
    instructorId: string
    courseId: string
}

export type UpdateClassroomsForm = CreateClassroomsForm & {
    id: string
}

export type ClassRoomItem = {
    _id: string
    name: string
    description: string
    courseId: {
        _id: string
        id: string
        title: string
        slug: string
    }
    instructorId: {
        _id: string
        firstName: string
        lastName: string
        email: string
        profession: string
        id: string
    }
    createdAt: string
    updatedAt: string
    id: string
}

export type ClassRoomsList = {
    statusCode: number
    data: ClassRoomItem[]
}

export type ClassroomDetailItem = ClassRoomItem & {
    lessons: LessonItemNew[]
}

// Lesson
export type LessonItemNew = {
    _id: string
    title: string
    slug: string
    content: string
    video: string
    freeReview: false
    level: string[]
    courseId: string
    classId: {
        description: string
        id: string
        name: string
        _id: string
    }
    pickedStudent: number
    limitStudent: number
    isPublic: true
    creatorId: string
    startTime: string
    endTime: string
    createdAt: string
    updatedAt: string
    isExpired: boolean
    id: string
}

export type SettingCalendarProps = {
    lessonIds: string[]
    studentId: string
}

//Schedule
export type ConfirmScheduleForm = {
    pickId: string
    teacherId: string
    pickTimes: TimesScheduleType[]
    staticTimes: string[]
    // startTime: string
}

export type DenyScheduleForm = {
    pickId: string
    reason: string
}

export type lessonTimeItem = {
    date: number
    times: string[]
}

//Schedule

export type TimesScheduleType = {
    date: number
    hour: number
    minute: number
}

export type CourseScheduleType = {
    availableTimes: TimesScheduleType[]
    id: string
    instructorId: UserTypeProps
    slug: string
    startTime: string
    title: string
    _id: string
    durationALesson: number
}

export type StudentScheduleType = {
    email: string
    firstName: string
    lastName: string
    id?: string
}

export type RequestStudentScheduleType = {
    courseId: CourseScheduleType
    createdAt: string
    id: string
    _id: string
    isVerified: boolean
    pickTimes: TimesScheduleType[]
    reason: string
    studentId: StudentScheduleType
    updatedAt: string
}

export type LessonEnrolledTypes = {
    courseId: string
    studentId: string
}

//Chatting
export type ChattingItemTypes = {
    createdAt: string
    files: string[]
    from: UserItemTypeProps
    id: string
    isRead: boolean
    message: string
    to: UserItemTypeProps
    updatedAt: string
    _id: string
}

export type ChattingData = {
    hasNextPage: boolean
    hasPrevPage: boolean
    limit: number
    nextPage: number
    page: number
    pagingCounter: number
    prevPage: null
    totalDocs: number
    totalPages: number
    docs: ChattingItemTypes[]
}

//Recoding
export type LessonRecordTypes = {
    _id: string
    title: string
    content: string
    id: string
    instructorId: {
        avatar: string
        email: string
        id: string
        firstName: string
        lastName: string
        profession: string
    }
}

export type RecordItemTypes = {
    _id: string
    lessonId: LessonRecordTypes
    isActive: true
    content: string
    createdAt: string
    updatedAt: string
    id: string
    courseId: string
}

export type RecordAddNewTypes = {
    lessonId: string
    isActive: boolean
    content: string
    courseId: string
}

export type RecordUpdateTypes = RecordAddNewTypes & {
    id: string
}

export type EnrollCourseTypes = {
    studentId: string
    courseId: string
    pickTimes: {
        date: number
        hour: number
        minute: number
    }[]
}
