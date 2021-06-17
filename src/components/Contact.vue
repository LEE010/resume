<template>
    <section id="contact" class="resume_contact">
        <h2 class="section_title">
            <span class="contact_title">Contact.</span>
        </h2>
        <div class="contact_wrap">
            <img src="@/assets/thumb/profile.jpg" alt="이동현" width="200" height="200" class="contact_thumb">
            <ul class="contact_socials">
                <li class="social_item">
                    <a href="mailto:dhlee318@me.com" class="social_link icon_email">
                        <span class="blind">이메일</span>
                    </a>
                </li>
                <li class="social_item">
                    <a href="tel:010-2055-0328" class="social_link icon_phone">
                        <span class="blind">전화</span>
                    </a>
                </li>
                <li class="social_item">
                    <a href="https://github.com/LEE010?tab=repositories" class="social_link icon_github">
                        <span class="blind">git</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ResumeContact'
}
</script>
