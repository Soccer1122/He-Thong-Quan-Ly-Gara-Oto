package PTTK.HTTT.HeThongGaraOto.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_payroll")
public class Payroll {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "month")
    private Date date;

    @Column(name = "total_day")
    private int totalDay;

    @Column(name = "bonus")
    private float bonus;

    @Column(name = "total")
    private float total;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Bill> billList;

    @ManyToOne()
    @JoinColumn(name = "technicall_staff_id")
    private TechnicalStaff technicalStaff;
}
