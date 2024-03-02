import { defineStore } from 'pinia';

export const useCoverLetterStore = defineStore('coverLetter', {
    state: () => ({
        formData: {
            Fullname: 'Ada sheik',
            position: 'software Develloper',
            companyName: 'JobCrafters Gmbh',
            hiringManagerName: 'Marc carlos',
            address: 'Mainkofen ,deggendorf',
            email: 'adasheik01@gmail.com',
            number: '178 732 16 94',
            website:'www.marco-carlos.com',
            linkedin:"@idriss.carlos",
            letterDetails: `
            <p>Dear Hiring Manager,</p>
            <p>I am writing to express my keen interest in the Web Designer position at Google, as I believe my creative skills and technical expertise align perfectly with the innovative culture that Google embodies. With a comprehensive understanding of design principles and a commitment to creating visually appealing and user-friendly interfaces, I am eager to bring my unique blend of talents to the Google team.</p> <br>
            <p>During my previous role at [Previous Company], I successfully led a team of designers in overhauling the user experience for our flagship product. This project not only improved customer satisfaction by 35% but also received the [Industry Award Name] for design excellence. I am passionate about harnessing the power of design to solve complex problems and create engaging online experiences that resonate with users.</p>
            <p>At Google, I am particularly excited about the opportunity to work on projects that reach millions of users and set new standards in the industry. I am confident that my ability to work collaboratively, coupled with my pursuit for design perfection, would make me a valuable asset to your team. Additionally, I am well-versed in the latest web technologies and design tools, which I believe will enable me to contribute effectively from day one.</p>
            <p>Please find my portfolio attached, showcasing my range and depth in web design. I look forward to the possibility of discussing how my background, skills, and enthusiasms can be in line with the groundbreaking work being done at Google.</p>
            <p>Thank you for considering my application. I am available at your convenience for an interview and can be reached at [Your Contact Information].</p>
            <p>Sincerely,<br>
            Carlos Idriss</p>
          `
        },
        colorId: 0,
        fontSize: '16',
        score: 85,
        templateId: 0,
        colors: [
            { id: 0, bgColor: 'bg-blue-500', ringColor: 'ring-blue-500' },
            { id: 1, bgColor: 'bg-yellow-500', ringColor: 'ring-yellow-500' },
            { id: 2, bgColor: 'bg-amber-500', ringColor: 'ring-amber-500' },
            { id: 3, bgColor: 'bg-green-500', ringColor: 'ring-green-500' },
            { id: 4, bgColor: 'bg-red-500', ringColor: 'ring-red-500' },

        ],
        textcolors:[
            { id: 0, textColor: 'text-blue-500' },
            { id: 1, textColor: 'text-yellow-500'  },
            { id: 2, textColor: 'text-amber-500' },
            { id: 3, textColor: 'text-green-500' },
            { id: 4, textColor: 'text-red-500' },
        ],
    }),
    getters: {
        currentColor: (state) => {
            return state.colors.find(color => color.id === state.colorId + 1);
        }
    },
    actions: {
        setFormData(data) {
            this.formData = data;
        },
        setColor(colorId) {
            this.colorId = colorId;
        }
        ,
        setFontFamily(fontFamily) {
            this.fontFamily = fontFamily;
        },
        setFontSize(fontSize) {
            this.fontSize = fontSize;
        },
        setTemplateId(templateId) {
            this.templateId = templateId;
        },
    },
});
