document.addEventListener('DOMContentLoaded', function() {
    const subjects = [
        { name: '생활속의첨단소재나노적층공정기술', professors: ['교수1', '교수2', '교수3(중앙대)'], pdf: 'pdfs/subject1.pdf' },
        { name: '교과목2', professors: ['교수3'], pdf: 'pdfs/subject1.pdf' },
        { name: '교과목3', professors: ['교수3'], pdf: 'pdfs/subject1.pdf' },
        { name: '교과목4', professors: ['교수3'], pdf: 'pdfs/subject1.pdf' },
        { name: '교과목5', professors: ['교수3'], pdf: 'pdfs/subject1.pdf' },
        // 추가 교과목 데이터 여기에 삽입...
        { name: '교과목20', professors: ['교수4', '교수5', '교수6', '교수7'], pdf: 'pdfs/subject20.pdf' },
    ];

    const container = document.getElementById('subjects-container');

    subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';

        const subjectTitle = document.createElement('h2');
        subjectTitle.textContent = subject.name;
        subjectCard.appendChild(subjectTitle);

        const subjectProfessors = document.createElement('p');
        subjectProfessors.textContent = `${subject.professors.join(', ')}`;
        // subjectCard.appendChild(subjectProfessors);   // 교수명 표시 주석풀기

        const subjectLink = document.createElement('a');
        subjectLink.href = subject.pdf;
        subjectLink.textContent = '강의계획서';
        subjectCard.appendChild(subjectLink);

        container.appendChild(subjectCard);
    });
});