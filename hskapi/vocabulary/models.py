from django.db import models


class Vocabulary(models.Model):
    lesson_id = models.PositiveIntegerField()
    simplified_chinese = models.CharField(max_length=8)
    traditional_chinese = models.CharField(max_length=8)
    pinyin = models.CharField(max_length=32)
    pinnum = models.CharField(max_length=32)
    pinplain = models.CharField(max_length=32)
    english = models.CharField(max_length=32)
    date_modified = models.DateTimeField(auto_now=True, editable=True)

    def __str__(self):
        return '%s %s %s %s %s %s' % (self.simplified_chinese, self.traditional_chinese, self.pinyin, self.pinnum, self.pinplain, self.english)

    class Meta:
        verbose_name = u'Vocabulary'
        verbose_name_plural = u'Vocabulary'
